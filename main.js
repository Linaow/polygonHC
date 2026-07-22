import * as THREE from 'three';
import './style.css';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
scene.background = new THREE.Color(0xb9a580);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

renderer.render(scene, camera);

renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.z = 0; 
//cat 
const geometry = new THREE.SphereGeometry(1, 32, 32); 
const texture = new THREE.TextureLoader().load('orange-cat.jpg');
texture.wrapS = THREE.RepeatWrapping; 
texture.wrapT = THREE.RepeatWrapping; 
texture.repeat.set(2, 1); 
const material = new THREE.MeshBasicMaterial({ map: texture });
const ellipsoid = new THREE.Mesh(geometry, material);

ellipsoid.scale.set(1.5, 1, 1); // stretch on x, keep y and z normal
scene.add(ellipsoid);
ellipsoid.position.set(-3, -1, -5);
//yarn
const yarnGeometry = new THREE.SphereGeometry(0.5, 30, 32);
const yarnTexture = new THREE.TextureLoader().load('yarn.png');
yarnTexture.wrapS = THREE.RepeatWrapping; 
yarnTexture.wrapT = THREE.RepeatWrapping; 
yarnTexture.repeat.set(5, 5);
const yarn = new THREE.Mesh(yarnGeometry, new THREE.MeshBasicMaterial({ map: yarnTexture }));
yarn.position.set(4, 3, -5);
scene.add(yarn);

function animate() {

  ellipsoid.rotation.x += 0.01;
  ellipsoid.rotation.y += 0.01;
  yarn.rotation.x += 0.01;
  renderer.render( scene, camera );

}
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  ellipsoid.rotation.y += 0.01;
  ellipsoid.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0000;
  camera.rotation.y = t * -0.0000;

}

document.body.onscroll = moveCamera;
moveCamera();


animate();
