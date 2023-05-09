import { useState, useEffect, Suspense } from "react";

import {Canvas} from "@react-three/fiber";
import { meshBounds, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader'

const Computers =({isMobile})=>{

    const computer = useGLTF("./desktop_pc/scene.gltf");

    return(
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={1} />
            <spotLight 
                position={[-20,50,10]}
                angle={0.12}
                intensity={1}
                penumbra={1}
                castShadow
                shadow-mapSize ={1024}
            />
            <primitive
                object = {computer.scene}
                scale={isMobile ? 0.70 : 0.75}
                position={isMobile ? [0,-3.65,-1.5]:[0,-3.75,-1.7]}
                rotation = {[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputerCanvas=()=>{
    const[isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const mediaQuery = window.matchMedia("(max-width: 768px")
   

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event)=>{
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return ()=>{
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }

    }, []);

    return(
        <Canvas
         frameloop="demand"
         shadows
         dpr={[4,100]}
         camera={{position:[20,3,5],fov:40}}
         gl={{preserveDrawingBuffer:true}}
        >

               <Suspense fallback={<CanvasLoader />}>
                  <OrbitControls 
                    enableZoom = {false}
                    maxPolarAngle = {Math.PI /2}
                    minPolarAngle = {Math.PI /2}
                  />
                  <Computers isMobile={isMobile}/>
               </Suspense>
        </Canvas>
        
    )
}

export default ComputerCanvas;