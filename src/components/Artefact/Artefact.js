import * as THREE from 'three';


export function genererArtefact(container, geometrie, couleur) {
    let scene;
    let renderer;
    let camera;
    let artefact;

    //------------------SCENE------------------
    scene = new THREE.Scene();

    //------------------RENDERER------------------
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);

    //------------------CAMERA------------------
    camera = new THREE.PerspectiveCamera(75, 400 / 400, 1, 1000);
    camera.position.set(0, 0, 400);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    //------------------LUMIERE------------------
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.y = 10;
    directionalLight.position.x = -10;
    directionalLight.position.z = -10;
    scene.add(directionalLight);


    artefact = forme(geometrie, couleur)
    scene.add(artefact)

    function animate() {
        render(renderer, scene, camera, artefact);
        requestAnimationFrame(animate);
    }

    animate();
}

function forme(geometry, couleur) {
    const material = new THREE.MeshBasicMaterial({ color: couleur, wireframe: true });

    switch (geometry) {
        case "cube":
            geometry = new THREE.BoxGeometry(200, 200, 200);
            break;

        case "sphere":
            geometry = new THREE.SphereGeometry(100, 15, 15);
            break;

        case "pyramide":
            geometry = new THREE.TetrahedronGeometry(100, 0);
            break;

        case "dodecaedre":
            geometry = new THREE.DodecahedronGeometry(100, 1);
            break;

        default:
            break;
    }

    const artefact = new THREE.Mesh(geometry, material);
    return artefact;

}

function render(renderer, scene, camera, artefact) {
    artefact.rotation.x += 0.01;
    artefact.rotation.y += 0.01;
    renderer.render(scene, camera);
}