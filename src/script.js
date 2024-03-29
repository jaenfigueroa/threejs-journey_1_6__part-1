import * as THREE from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Scene
const scene = new THREE.Scene()

// Axes helper, ejes de coordenadas de ayuda
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
)

// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)

camera.position.x = 2
camera.position.y = 2
camera.position.z = 2

camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Update objects
  mesh.rotation.y = elapsedTime

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
