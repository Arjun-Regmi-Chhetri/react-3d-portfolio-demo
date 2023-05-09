import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from '../Loader'
const Earth =()=>{
    const earth = useGLTF('./planet/scene.gltf');
    return(
       
            <primitive 
            object ={earth.scene}
            scale={2.5}
            position-y={0}
            rotation-y={0}
            />
       
    )
}
const EarthCanvas =()=>{
    return(
        <Canvas
          shadows
          frameloop="demand"
          dpr={[5,100]}
          gl={{preserveDrawingBuffer:true}}
          camera={{
            fov:45,
            near:0.1,
            far:200,
            position:[-4,3,6]
          }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                autoRotate
                enableZoom={false}
              
          
                />
                <Earth />
                <Preload all />
            </Suspense>

        </Canvas>
    )
}

export default EarthCanvas;