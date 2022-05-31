import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!)
    const [edges, setEdges] = useState(3)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame((state, delta) => {
      ref.current.rotation.y += 0.008
      ref.current.rotation.z += 0.01
    })

    useEffect(() => {
      ref.current.rotation.x = 0.25
      const interval = setInterval(() => {
        setEdges(Math.round(Date.now() / 1000) % 5 + 3)
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }, [])
  
    return (
      <mesh
        {...props}
        ref={ref}>
        <torusGeometry args={[edges / 6, 0.1, 16, edges]} />
        <meshStandardMaterial color={'orange'} transparent={true} />
      </mesh>
    )
  }

export default function Home() {

  const [subHeaderWidth, setSubHeaderWidth] = useState('0%')

  const canvasStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    userSelect: 'none',
    msUserSelect: 'none',
  }

  useEffect(() => {
    setSubHeaderWidth('75%')
  }, [])

  return (
    <>
      <h1>Riley Bruins</h1>
      <h2 style={{maxWidth: subHeaderWidth}} className='subHeader'>Driven and passionate full stack developer</h2>
      <div className='textBlock leftBlock'>
        <h2>About Me</h2>
        <p>
          I am a full stack developer with 3+ years of experience building websites.
          I love programming and I have built countless websites, working in teams and by myself.
        </p>
      </div>
      <Canvas style={canvasStyle}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <Box position={[-1.2, 0, 0]} /> */}
        <Box position={[1.5, 0, 0]} />
      </Canvas>
    </>
  )
}