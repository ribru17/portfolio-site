import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

type MeshProps = JSX.IntrinsicElements['mesh']
interface TorusProps extends MeshProps {
  points: number
}

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01
  })

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial color='slateblue' />
    </mesh>
  )
}

function Torus(props: TorusProps) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    ref.current.rotation.y += 0.008
    ref.current.rotation.z += 0.01
  })

  return (
    <mesh
      {...props}
      ref={ref}>
      <torusGeometry args={[1, 0.1, 16, props.points]} />
      <meshPhongMaterial color={'goldenrod'} />
    </mesh>
  )
}

export default function Home() {

  const [subHeaderWidth, setSubHeaderWidth] = useState('0%')
  const [scrollPercent, setScrollPercent] = useState(0)

  const canvasStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    userSelect: 'none',
    msUserSelect: 'none',
  }

  const handleScroll = (e: Event) => {
    let scrollPerc =  window.scrollY / (document.body.offsetHeight - window.innerHeight)
    setScrollPercent(scrollPerc)
  }

  useEffect(() => {
    setSubHeaderWidth('75%')
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <h1>Riley Bruins</h1>
      <h2 style={{maxWidth: subHeaderWidth}} className='subHeader'>Driven and passionate full stack developer</h2>
      <div className='textBlock leftBlock'>
        <h2>About Me</h2>
        <p>
          I am a full stack developer with 3+ years of experience building websites.
          I love programming and I have worked on countless projects, both in teams and by myself.
        </p>
      </div>
      <div className='textBlock rightBlock'>
        <h2>Something Else</h2>
          <p>
            Some other thing
          </p>
      </div>
      <Projects />
      <Experience />
      <Contact />

      <Canvas style={canvasStyle}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {/* <Box position={[-1.2, 0, 0]} /> */}
        <Torus position={[1.5, 2 * scrollPercent, scrollPercent * 5]} rotation-y={Math.PI / 3} points={5}/>
        <Torus position={[1.5, 2 * scrollPercent, scrollPercent * 5]} rotation-y={Math.PI / 2} rotation-x={Math.PI / 3} scale={0.5} points={4} />
        <Torus position={[1.5, 2 * scrollPercent, scrollPercent * 5]} rotation-y={Math.PI} rotation-x={2 * Math.PI / 3} scale={0.25} points={3} />
        <Box position={[-1.5, 2 * scrollPercent - 2.5, 6 + scrollPercent * -5]} />
      </Canvas>
    </>
  )
}