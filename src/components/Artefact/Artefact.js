import * as THREE from 'three';
import { metalness, roughness, shininess } from 'three/webgpu';


export function genererArtefact(container, geometrie, couleur) {
    let scene;
    let renderer;
    let camera;
    let artefact;
    let hemiLight;
    let dirLight;

    //------------------SCENE------------------
    scene = new THREE.Scene();

    //------------------RENDERER------------------
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);
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
    // dirLight.shadowCameraVisible = true;

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
    camera = new THREE.PerspectiveCamera(75, 400 / 400, 1, 1000);
    camera.position.set(0, 0, 400);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    const axis = new THREE.Vector3(0.5, 2, 0).normalize();  // Axe incliné

    artefact = forme(geometrie, couleur, axis)
    scene.add(artefact)

    function animate() {
        render(renderer, scene, camera, artefact, axis);
        requestAnimationFrame(animate);
    }

    animate();
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
    // Aligner l'axe vertical de l'artefact avec l'axe incliné
    const quaternion = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);  // L'axe vertical de la géométrie (Y par défaut)
    quaternion.setFromUnitVectors(up, axis);  // Rotation pour aligner Y avec l'axe incliné
    artefact.applyQuaternion(quaternion);  // Appliquer la rotation initiale à la géométrie

    return artefact;

}

function render(renderer, scene, camera, artefact, axis) {
    const angle = 0.01;  // Angle de rotation à chaque frame
    const quaternion = new THREE.Quaternion();

    // Créer un quaternion représentant une rotation autour de l'axe incliné
    quaternion.setFromAxisAngle(axis, angle);

    // Appliquer la rotation en quaternion à l'artefact
    artefact.quaternion.multiplyQuaternions(quaternion, artefact.quaternion);

    renderer.render(scene, camera);
}