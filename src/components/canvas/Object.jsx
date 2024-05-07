'use client'

import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export function Archi(props) {
  const mesh = useRef(null)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 30)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 50)
  })

  const materials = useLoader(MTLLoader, "model.mtl");
  const obj = useLoader(OBJLoader, "model.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return (
    <group ref={mesh}>
      <primitive object={obj} {...props} />
    </group>
  )
}
