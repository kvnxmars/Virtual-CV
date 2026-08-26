/* ------------------------------------------------------------------
File: src/components/ThreeScene.jsx
- Uses @react-three/fiber + drei to render an ambient 3D background.
- Recolored from the old rainbow-neon (cyan/magenta/purple) set to the
  site's actual palette — dusty blue + beige — and switched to
  wireframe geometry at low emissive intensity so it reads as a faint
  technical sketch rather than a loud neon centerpiece.
-------------------------------------------------------------------*/
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'

function WireTorus({ color = '#7d9bc2' }) {
  return (
    <Float rotationIntensity={0.5} floatIntensity={0.8} speed={1}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.25, 24, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          metalness={0.1}
          roughness={0.6}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function WireCube({ position = [2, 0, -2], color = '#d9c9a3' }) {
  return (
    <Float rotationIntensity={0.6} floatIntensity={1}>
      <mesh position={position}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.1}
          roughness={0.6}
          wireframe
        />
      </mesh>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <div className="three-wrap" aria-hidden>
      <Canvas camera={{ position: [0, 1.2, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />
        <Suspense fallback={null}>
          <WireTorus color={'#7d9bc2'} />
          <WireCube position={[2.2, -0.5, -1]} color={'#d9c9a3'} />
          <WireCube position={[-2.2, 0.7, -1]} color={'#5b7ea3'} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  )
}