'use client'

import { useEffect, useMemo, useRef } from 'react'
import vertexShader from './vertex-shader'
import fragmentShader from './fragment-shader'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { motion } from 'framer-motion-3d'

const BlobAnimation = () => {
  const mesh = useRef(null)
  const hover = useRef(false)
  // @ts-ignore
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    }
  })

  useFrame((state) => {
    const { clock } = state
    if (mesh.current) {
      // @ts-ignore
      mesh.current.material.uniforms.u_time.value = 0.1 * clock.getElapsedTime()
      // @ts-ignore
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        // @ts-ignore
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      )
    }
  })

  return (
    <motion.mesh
      ref={mesh}
      scale={3.5}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </motion.mesh>
  )
}

export default BlobAnimation
