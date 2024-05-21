import App from '../repulsion-fx-scene/src/scripts/app.js';
import React, { useEffect, useRef } from 'react';
import './Renderer.css';

function Renderer() {
    const canvasRef = useRef(null);
    var prepped = false;

    useEffect(() => {
        
        // This checks if the ref is currently associated with a canvas element
        if (canvasRef.current && !canvasRef.current.hasChildNodes() && !prepped) {
            // if screen width is less than 600px, dont render the 3d scene
            if (window.innerWidth < 600) {
                return;
            }
            new App().init(canvasRef.current); // Assuming 'setup' can accept an element to attach the canvas to
            console.log('Canvas attached to Three.js scene');
            prepped = true;
        }

        return () => {
            // Cleanup code here, if needed
        };
    }, []); // Empty dependency array to run once on mount

    return (
        <div id='underlay'>
            {/* Other component code */}
            <div ref={canvasRef}></div> {/* This div acts as a container for your Three.js scene */}
        </div>
    );
}

export default Renderer;