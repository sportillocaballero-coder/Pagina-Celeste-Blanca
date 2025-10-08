console.log('🚀 Starting 3D models loading...');

// Global variables for optimization
let loadedModels = new Set();
let modelObserver = null;
let animationFrames = new Map();

// Function to create basic 3D model that always works
function createAsteroid(canvasId, color = 0x8B4513, size = 1) {
    console.log(`Creating asteroid in canvas: ${canvasId}`);
    
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas ${canvasId} not found`);
        return;
    }

    // Check if already loaded
    if (loadedModels.has(canvasId)) {
        console.log(`Model ${canvasId} already loaded, skipping...`);
        return;
    }

    // Verify that Three.js is available
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded');
        canvas.style.background = 'linear-gradient(45deg, #1a1a2e, #16213e)';
        canvas.style.display = 'flex';
        canvas.style.alignItems = 'center';
        canvas.style.justifyContent = 'center';
        canvas.innerHTML = '<div style="color: white; text-align: center;">🌌<br>3D Model<br>Loading...</div>';
        return;
    }

    // Configure scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: false, // Reduced for performance
        alpha: true,
        powerPreference: "high-performance" // Prefer GPU
    });

    // Configure canvas size
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 300;
    const height = rect.height || 250;
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000011, 0.3);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    console.log(`Canvas ${canvasId} configured: ${width}x${height}`);

    // Lights (simplified for performance)
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create asteroid geometry with lower complexity
    const geometry = new THREE.IcosahedronGeometry(size * 0.8, 0); // Reduced detail level
    
    // Deform to look like irregular asteroid (simplified)
    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        const factor = 0.7 + Math.random() * 0.6;
        positions[i] *= factor;
        positions[i + 1] *= factor;
        positions[i + 2] *= factor;
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    // Asteroid material (simplified)
    const material = new THREE.MeshLambertMaterial({ // Changed from Phong for better performance
        color: color,
        wireframe: false
    });

    const asteroid = new THREE.Mesh(geometry, material);
    scene.add(asteroid);

    // Position camera farther for better view
    camera.position.set(0, 0, 4);
    camera.lookAt(0, 0, 0);

    console.log(`Asteroid ${canvasId} created successfully`);

    // Optimized animation function with FPS control
    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const frameTime = 1000 / targetFPS;

    function animate(currentTime) {
        const animationId = requestAnimationFrame(animate);
        animationFrames.set(canvasId, animationId);
        
        // Control frame rate
        if (currentTime - lastTime < frameTime) {
            return;
        }
        lastTime = currentTime;
        
        // Only animate if canvas is visible
        if (isElementVisible(canvas)) {
            asteroid.rotation.x += 0.005;
            asteroid.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
    }

    // Start animation
    animate(0);

    // Handle window resizing (debounced)
    let resizeTimeout;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newRect = canvas.getBoundingClientRect();
            const newWidth = newRect.width || 300;
            const newHeight = newRect.height || 250;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        }, 250);
    };
    
    window.addEventListener('resize', handleResize);

    // Mark as loaded
    loadedModels.add(canvasId);

    return { scene, camera, renderer, asteroid, cleanup: () => {
        window.removeEventListener('resize', handleResize);
        if (animationFrames.has(canvasId)) {
            cancelAnimationFrame(animationFrames.get(canvasId));
            animationFrames.delete(canvasId);
        }
        renderer.dispose();
        geometry.dispose();
        material.dispose();
    }};
}

// Function to check if element is visible in viewport
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        rect.left < windowWidth &&
        rect.right > 0
    );
}

// Optimized GLB loading function
function tryLoadGLB(canvasId, modelPath, texturePath) {
    console.log(`Trying to load GLB: ${modelPath}`);
    
    // Check if already loaded
    if (loadedModels.has(canvasId)) {
        console.log(`Model ${canvasId} already loaded, skipping...`);
        return;
    }
    
    // First create smaller default asteroid
    const fallback = createAsteroid(canvasId, 0x8B4513, 0.8);
    
    // Check if GLTFLoader is available
    if (typeof THREE.GLTFLoader === 'undefined') {
        console.warn('GLTFLoader not available');
        return;
    }

    const loader = new THREE.GLTFLoader();
    
    // Use manager to track loading
    const manager = new THREE.LoadingManager();
    loader.manager = manager;
    
    loader.load(
        modelPath,
        function(gltf) {
            console.log(`✅ Model ${modelPath} loaded successfully`);
            
            // Remove fallback asteroid
            if (fallback && fallback.asteroid) {
                fallback.scene.remove(fallback.asteroid);
            }
            
            const model = gltf.scene;
            
            // Optimize model for performance
            model.traverse(function(child) {
                if (child.isMesh) {
                    // Reduce geometry complexity if too high
                    if (child.geometry.attributes.position.count > 10000) {
                        console.log(`Simplifying mesh in ${canvasId} for performance`);
                        child.geometry = child.geometry.clone();
                        // Could implement geometry simplification here
                    }
                    
                    // Optimize material
                    if (child.material) {
                        child.material.transparent = false;
                        child.material.alphaTest = 0;
                        child.castShadow = false;
                        child.receiveShadow = false;
                    }
                }
            });
            
            // Calculate model size and scale appropriately
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2.0 / maxDim;
            
            model.scale.setScalar(scale);
            
            // Center the model
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center.multiplyScalar(scale));
            
            fallback.scene.add(model);
            
            // Adjust camera for better GLB model view
            fallback.camera.position.set(0, 0, 2);
            fallback.camera.lookAt(0, 0, 0);
            
            // Apply texture if exists (optimized loading)
            if (texturePath) {
                const textureLoader = new THREE.TextureLoader();
                textureLoader.load(texturePath, function(texture) {
                    texture.generateMipmaps = false;
                    texture.minFilter = THREE.LinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    
                    model.traverse(function(child) {
                        if (child.isMesh && child.material) {
                            child.material.map = texture;
                            child.material.needsUpdate = true;
                        }
                    });
                });
            }
            
            // Optimized animation for GLB model
            let lastTime = 0;
            const targetFPS = 30;
            const frameTime = 1000 / targetFPS;
            
            function animateGLB(currentTime) {
                const animationId = requestAnimationFrame(animateGLB);
                animationFrames.set(canvasId + '_glb', animationId);
                
                if (currentTime - lastTime < frameTime) {
                    return;
                }
                lastTime = currentTime;
                
                const canvas = document.getElementById(canvasId);
                if (canvas && isElementVisible(canvas)) {
                    model.rotation.x += 0.005;
                    model.rotation.y += 0.01;
                    fallback.renderer.render(fallback.scene, fallback.camera);
                }
            }
            
            // Start specific animation for GLB model
            animateGLB(0);
            
            // Update loaded status
            loadedModels.add(canvasId);
        },
        function(progress) {
            if (progress.total > 0) {
                const percent = (progress.loaded / progress.total * 100);
                console.log(`Loading ${modelPath}: ${percent.toFixed(1)}%`);
            }
        },
        function(error) {
            console.warn(`❌ Error loading ${modelPath}:`, error);
            console.log('Using fallback model');
            loadedModels.add(canvasId); // Mark as "loaded" even with fallback
        }
    );
}

// Intersection Observer for lazy loading
function setupLazyLoading() {
    if (!('IntersectionObserver' in window)) {
        console.log('IntersectionObserver not supported, loading all models');
        loadAllModels();
        return;
    }

    const options = {
        root: null,
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1
    };

    modelObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const canvasId = entry.target.id;
                console.log(`🔍 Canvas ${canvasId} is visible, loading model...`);
                
                // Load the appropriate model
                loadModelForCanvas(canvasId);
                
                // Stop observing this element
                modelObserver.unobserve(entry.target);
            }
        });
    }, options);

    // Observe all canvas elements
    const canvases = document.querySelectorAll('canvas[id^="model-"]');
    canvases.forEach(canvas => {
        if (!loadedModels.has(canvas.id)) {
            canvas.style.background = 'linear-gradient(45deg, #1a1a2e, #16213e)';
            canvas.style.display = 'flex';
            canvas.style.alignItems = 'center';
            canvas.style.justifyContent = 'center';
            canvas.innerHTML = '<div style="color: white; text-align: center;">🌌<br>Scroll to load<br>3D Model</div>';
            modelObserver.observe(canvas);
        }
    });

    console.log(`🔍 Set up lazy loading for ${canvases.length} models`);
}

// Load specific model for canvas
function loadModelForCanvas(canvasId) {
    if (loadedModels.has(canvasId)) {
        return;
    }

    // Clear placeholder content
    const canvas = document.getElementById(canvasId);
    if (canvas) {
        canvas.innerHTML = '';
        canvas.style.background = '';
    }

    switch(canvasId) {
        case 'model-proximo1':
            tryLoadGLB(canvasId, 'assets/models/apophis.glb', 'assets/textures/textura.jpeg');
            break;
        case 'model-proximo2':
            tryLoadGLB(canvasId, 'assets/models/asteroid_2024_yr4.glb', 'assets/textures/textura.jpeg');
            break;
        case 'model-chicxulub':
            tryLoadGLB(canvasId, 'assets/models/chicxulub.glb', 'assets/textures/textura.jpeg');
            break;
        case 'model-chelyabinsk':
            tryLoadGLB(canvasId, 'assets/models/Chelyabinsk.glb', 'assets/textures/textura.jpeg');
            break;
        case 'model-hoba':
            tryLoadGLB(canvasId, 'assets/models/hoba.glb', 'assets/textures/textura.jpeg');
            break;
        case 'model-bennu':
            tryLoadGLB(canvasId, 'assets/models/bennu.glb', 'assets/textures/textura.jpeg');
            break;
        case 'model-4vesta':
            tryLoadGLB(canvasId, 'assets/models/4vesta.glb', 'assets/textures/textura.jpeg');
            break;
        default:
            // Fallback to basic asteroid
            createAsteroid(canvasId, 0x8B4513, 1.0);
            break;
    }
}

// Load all models (fallback for older browsers)
function loadAllModels() {
    console.log('🌟 Loading all 3D models...');
    
    const modelConfigs = [
        { id: 'model-proximo1', model: 'assets/models/apophis.glb', texture: 'assets/textures/textura.jpeg' },
        { id: 'model-proximo2', model: 'assets/models/asteroid_2024_yr4.glb', texture: 'assets/textures/textura.jpeg' },
        { id: 'model-chicxulub', model: 'assets/models/chicxulub.glb', texture: 'assets/textures/textura.jpeg' },
        { id: 'model-chelyabinsk', model: 'assets/models/Chelyabinsk.glb', texture: 'assets/textures/textura.jpeg' },
        { id: 'model-hoba', model: 'assets/models/hoba.glb', texture: 'assets/textures/textura.jpeg' },
        { id: 'model-bennu', model: 'assets/models/bennu.glb', texture: 'assets/textures/textura.jpeg' },
        { id: 'model-4vesta', model: 'assets/models/4vesta.glb', texture: 'assets/textures/textura.jpeg' }
    ];

    // Load with delay between each model to prevent browser freeze
    modelConfigs.forEach((config, index) => {
        setTimeout(() => {
            loadModelForCanvas(config.id);
        }, index * 200); // 200ms delay between each model
    });

    console.log('🎉 All models loading initiated with delays');
}

// Main initialization function
function initOptimizedModels() {
    console.log('🚀 Starting optimized 3D models initialization...');
    
    // Check that Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error('❌ Three.js is not available');
        setTimeout(initOptimizedModels, 500);
        return;
    }

    console.log('✅ Three.js detected, setting up lazy loading...');
    
    // Use lazy loading for better performance
    setupLazyLoading();
}

// Cleanup function for page unload
function cleanup() {
    console.log('🧹 Cleaning up 3D models...');
    
    // Cancel all animation frames
    animationFrames.forEach((id) => {
        cancelAnimationFrame(id);
    });
    animationFrames.clear();
    
    // Disconnect observer
    if (modelObserver) {
        modelObserver.disconnect();
    }
    
    // Clear loaded models set
    loadedModels.clear();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, starting optimized initialization...');
    initOptimizedModels();
});

// Cleanup on page unload
window.addEventListener('beforeunload', cleanup);

// Handle visibility change to pause/resume animations
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('⏸️ Page hidden, pausing animations');
        // Animations will naturally pause due to visibility check
    } else {
        console.log('▶️ Page visible, resuming animations');
    }
});

console.log('🎯 Optimized 3D models script loaded');