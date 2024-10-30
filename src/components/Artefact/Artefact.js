import * as THREE from 'three';

export function genererArtefact(container, geometrie, couleur) {
    let scene;
    let renderer;
    let camera;
    let artefact;
    let hemiLight;
    let dirLight;
    let axis;

    // Fonction pour mettre à jour la taille
    function updateSize() {
        if (renderer && camera && container.clientWidth > 0 && container.clientHeight > 0) {
            renderer.setSize(container.clientWidth, container.clientHeight);
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
        }
    }

    // Fonction de rendu pour l'animation
    function animate() {
        if (renderer && scene && camera && artefact && axis) {
            render(renderer, scene, camera, artefact, axis);
            requestAnimationFrame(animate);
        }
    }

    // Fonction d'initialisation principale
    function init() {
        //------------------SCENE------------------
        scene = new THREE.Scene();

        //------------------RENDERER------------------
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(0xffffff, 0);
        container.appendChild(renderer.domElement);

        //------------------LUMIERE------------------
        hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
        hemiLight.color.set(0.6, 0.75, 0.5);
        hemiLight.groundColor.set(0.095, 0.5, 0.5);
        hemiLight.position.set(0, 500, 0);
        scene.add(hemiLight);

        dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(-1, 0.75, 1);
        dirLight.position.multiplyScalar(50);
        dirLight.name = "dirlight";

        scene.add(dirLight);

        dirLight.castShadow = true;
        dirLight.shadowMapWidth = dirLight.shadowMapHeight = 1024 * 2;

        const d = 300;

        dirLight.shadowCameraLeft = -d;
        dirLight.shadowCameraRight = d;
        dirLight.shadowCameraTop = d;
        dirLight.shadowCameraBottom = -d;

        dirLight.shadowCameraFar = 3500;
        dirLight.shadowBias = -0.0001;
        dirLight.shadowDarkness = 0.35;

        //------------------CAMERA------------------
        camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 1000);
        camera.position.set(0, 0, container.clientWidth);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        axis = new THREE.Vector3(0.5, 2, 0).normalize();

        artefact = forme(geometrie, couleur, axis);
        scene.add(artefact);

        // Initialiser la taille une fois que tout est créé
        updateSize();

        // Démarrer l'animation
        animate();
    }

    // Observer les changements de taille du container
    const resizeObserver = new ResizeObserver(() => {
        updateSize();
    });
    resizeObserver.observe(container);

    // Écouter aussi le redimensionnement de la fenêtre
    window.addEventListener('resize', updateSize);

    // Attendons que le container ait une taille avant d'initialiser
    if (container.clientWidth > 0 && container.clientHeight > 0) {
        init();
    } else {
        // Si le container n'a pas encore de taille, on utilise un MutationObserver
        const observer = new ResizeObserver((entries) => {
            if (container.clientWidth > 0 && container.clientHeight > 0) {
                observer.disconnect();
                init();
            }
        });
        observer.observe(container);
    }

    // Retourner une fonction de nettoyage
    return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', updateSize);
    };
}

function forme(geometry, couleur, axis) {
    const material = new THREE.MeshPhysicalMaterial({ color: couleur, roughness: 0.5, metalness: 0, reflectivity: 0.5 });

    switch (geometry) {
        case "cube":
            geometry = new THREE.BoxGeometry(180, 180, 180);
            break;

        case "sphere":
            geometry = new THREE.SphereGeometry(140, 100, 100);
            break;

        case "pyramide":
            geometry = new THREE.CylinderGeometry(0, 160, 260, 4, 1);
            break;

        case "dodecaedre":
            geometry = new THREE.TetrahedronGeometry(140, 2);
            break;

        default:
            break;
    }

    const artefact = new THREE.Mesh(geometry, material);

    //------------------ORIENTATION INITIALE------------------
    const quaternion = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    quaternion.setFromUnitVectors(up, axis);
    artefact.applyQuaternion(quaternion);

    return artefact;
}

function render(renderer, scene, camera, artefact, axis) {
    const angle = 0.01;
    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(axis, angle);
    artefact.quaternion.multiplyQuaternions(quaternion, artefact.quaternion);
    renderer.render(scene, camera);
}