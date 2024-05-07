'use client'

import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export function Archi(props) {
  const materials = useLoader(MTLLoader, "model.mtl");
  const obj = useLoader(OBJLoader, "model.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} {...props} />
}
