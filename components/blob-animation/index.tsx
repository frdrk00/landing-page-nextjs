'use client'

import { Canvas } from '@react-three/fiber'
import BlobAnimation from './blob-animation'

const Blob = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [-7, 3, 6],
      }}
      className='max-lg:hidden'
    >
      <BlobAnimation />
    </Canvas>
  )
}

export default Blob
