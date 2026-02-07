/* ------------------------------------------------------------------
File: src/components/ThreeScene.jsx
- Uses @react-three/fiber + drei to render an animated neon 3D background
-------------------------------------------------------------------*/
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Html } from '@react-three/drei'


function NeonTorus({color = '#00eaff'}){
return (
<Float rotationIntensity={0.6} floatIntensity={1} speed={1}>
<mesh position={[0,0,0]}>
<torusBufferGeometry args={[1.1, 0.25, 32, 64]} />
<meshStandardMaterial emissive={color} emissiveIntensity={1.4} metalness={0.2} roughness={0.1} />
</mesh>
</Float>
)
}


function NeonCube({position=[2,0,-2], color='#ff00ff'}){
return (
<Float rotationIntensity={0.8} floatIntensity={1.2}>
<mesh position={position}>
<boxBufferGeometry args={[1.2,1.2,1.2]} />
<meshStandardMaterial emissive={color} emissiveIntensity={1.2} metalness={0.2} roughness={0.1} />
</mesh>
</Float>
)
}


export default function ThreeScene(){
return (
<div className="three-wrap" aria-hidden>
<Canvas camera={{position: [0, 1.2, 6], fov: 50}}>
<ambientLight intensity={0.6} />
<directionalLight position={[5,5,5]} intensity={0.6} />
<Suspense fallback={null}>
<NeonTorus color={'#00eaff'} />
<NeonCube position={[2.2, -0.5, -1]} color={'#9d4bff'} />
<NeonCube position={[-2.2, 0.7, -1]} color={'#ff0077'} />
</Suspense>
<OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
</Canvas>
</div>
)
}