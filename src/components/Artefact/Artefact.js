import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import testCubeModel from "/public/test_cube.gltf";

export function genererArtefact(container, couleur) {
	let scene;
	let renderer;
	let camera;
	let artefact;
	let ambientLight;
	let dirLight;
	let dirLight2;
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
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		container.appendChild(renderer.domElement);

		//------------------LUMIERE------------------
		ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		scene.add(ambientLight);

		dirLight = new THREE.PointLight(0xffffff, 100, 400, 1);
		dirLight.position.set(-2, 2, 3);
		dirLight.position.multiplyScalar(100);
		scene.add(dirLight);

		dirLight.castShadow = true;
		dirLight.shadow.mapSize.width = 1024;
		dirLight.shadow.mapSize.height = 1024;
		dirLight.shadow.camera.near = 1;
		dirLight.shadow.camera.far = 500;
		dirLight.shadow.bias = -0.001; // Réduire les artefacts d'ombres

		dirLight2 = new THREE.DirectionalLight(couleur, 2);
		dirLight2.position.set(5, -2, 3);
		dirLight2.position.multiplyScalar(100);
		scene.add(dirLight2);

		dirLight2.castShadow = true;
		dirLight2.shadow.mapSize.width = 1024;
		dirLight2.shadow.mapSize.height = 1024;
		dirLight2.shadow.camera.near = 1;
		dirLight2.shadow.camera.far = 500;
		dirLight2.shadow.bias = -0.001; // Réduire les artefacts d'ombres

		//------------------CAMERA------------------
		camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 1000);
		camera.position.set(0, 0, container.clientWidth);
		camera.lookAt(new THREE.Vector3(0, 0, 0));
		scene.add(camera);

		axis = new THREE.Vector3(0.5, 2, 0).normalize();

		// Charger le modèle GLTF
		const loader = new GLTFLoader();
		loader.load(
			"test_cube.gltf",
			(gltf) => {
				artefact = gltf.scene;

				// Activer les ombres sur tous les enfants du modèle
				artefact.traverse((child) => {
					if (child.isMesh) {
						child.castShadow = true;
						child.receiveShadow = true;
					}
				});

				scene.add(artefact);

				// Orientation initiale
				const quaternion = new THREE.Quaternion();
				const up = new THREE.Vector3(0, 1, 0);
				quaternion.setFromUnitVectors(up, axis);
				artefact.applyQuaternion(quaternion);

				// Ajuster l'échelle si nécessaire
				const scaleFactor = 250; // Ajustez selon la taille de votre modèle
				artefact.scale.set(scaleFactor, scaleFactor, scaleFactor);

				// Initialiser la taille une fois que tout est créé
				updateSize();

				// Démarrer l'animation
				animate();
			},
			undefined,
			(error) => {
				console.error("Erreur de chargement du modèle GLTF:", error);
			}
		);
	}

	// Observer les changements de taille du container
	const resizeObserver = new ResizeObserver(() => {
		updateSize();
	});
	resizeObserver.observe(container);

	// Écouter aussi le redimensionnement de la fenêtre
	window.addEventListener("resize", updateSize);

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
		window.removeEventListener("resize", updateSize);
	};
}

function render(renderer, scene, camera, artefact, axis) {
	const angle = 0.01;
	const quaternion = new THREE.Quaternion();
	quaternion.setFromAxisAngle(axis, angle);
	artefact.quaternion.multiplyQuaternions(quaternion, artefact.quaternion);
	renderer.render(scene, camera);
}
