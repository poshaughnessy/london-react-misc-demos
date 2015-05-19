(function() {

    if( !Detector.webgl ) return;

    var width = window.innerWidth;
    var height = window.innerHeight;

    // Create a WebGL renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );

    // Add generated <canvas> to page
    var container = document.getElementById('spinningCubeContainer');
    container.appendChild( renderer.domElement );

    // Make a scene
    var scene = new THREE.Scene();

    // Create a camera
    var camera = new THREE.PerspectiveCamera(
            45,           // Field of View
            width/height, // Aspect ratio
            1,            // zNear
            10000         // zFar
    );

    camera.position.z = 200;

    // Add it to the scene
    scene.add( camera );

    // Set up a texture
    var texture = THREE.ImageUtils.loadTexture('textures/react-logo.jpg');

    // Make a cube
    var cube = new THREE.Mesh(
            new THREE.CubeGeometry( 50, 50, 50 ),
            new THREE.MeshBasicMaterial( {map: texture} ));

    // Add it to the scene
    scene.add( cube );

    // Make it spin
    function animate() {

        // Angles are in radians
        cube.rotation.y += 0.05;

        // Re-render
        renderer.render(scene, camera);

        // Call animate again once browser's ready for next frame
        requestAnimationFrame( animate )

    }

    // Start animation going
    animate();
})();
