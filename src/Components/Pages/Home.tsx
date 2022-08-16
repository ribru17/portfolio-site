import * as THREE from 'three'
import React, { useRef, useState, useEffect, createRef, MutableRefObject } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
import "./CSS/home.css"

type MeshProps = JSX.IntrinsicElements['mesh']
interface TorusProps extends MeshProps {
  points: number,
}

// reference to scroll percent. must be typed as mutable! appending ' | null' to the
// type did not make it mutable as it would have with useRef. I believe this is a bug?...
const state = {
  scrollPercent: createRef<number>() as MutableRefObject<any>
}

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.position.y = THREE.MathUtils.lerp(-2.5, 0.5, state.scrollPercent.current)
    ref.current.position.z = THREE.MathUtils.lerp(6, 1, state.scrollPercent.current)
  })

  const { size } = useThree()

  return (
    <mesh
      {...props}
      position-x={-0.5 - size.width / 600}
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
  useFrame(() => {
    ref.current.rotation.y += 0.008
    ref.current.rotation.z += 0.01
    ref.current.position.y = THREE.MathUtils.lerp(0.25, 2, state.scrollPercent.current)
    ref.current.position.z = THREE.MathUtils.lerp(0, 5, state.scrollPercent.current)
  })

  const { size } = useThree()

  return (
    <mesh
      {...props}
      position-x={size.width / 400}
      ref={ref}>
      <torusGeometry args={[1, 0.1, 16, props.points]} />
      <meshPhongMaterial color={'slateblue'} />
    </mesh>
  )
}

export default function Home() {

  const [subHeaderWidth, setSubHeaderWidth] = useState('0%')
  
  const expRef = createRef<HTMLDivElement>()
  const contactRef = createRef<HTMLDivElement>()
  const projectsRef = createRef<HTMLDivElement>()

  // handling this in CSS proved a bit buggy
  const canvasStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -9,
    userSelect: 'none',
    msUserSelect: 'none',
    minHeight: 900
  }

  // subheader expand animation on window load
  useEffect(() => {
    window.scrollTo(0, 0)
    state.scrollPercent.current = 0
  }, [])

  useEffect(() => {
    const refs: React.RefObject<HTMLDivElement>[] = [expRef, contactRef, projectsRef]
    const handleScroll = (e?: Event) => {
      for (let i = 0; i < refs.length; i++) {
        // update scroll percent reference
        state.scrollPercent.current = Math.min(window.scrollY / (document.body.offsetHeight - window.innerHeight), 1)
        let windowHeight = window.innerHeight;
        // if (refs[i].current) {} // this is for some reason not working :/
        let elementTop = refs[i].current?.getBoundingClientRect().top;
        // reveal content when past 1/8 of the page
        let elementVisible = window.innerHeight / 8
        // reveal elements when scrolling into view
        if (elementTop && elementTop < windowHeight - elementVisible) {
          refs[i].current?.classList.add("active");
        }
      }
    }

    setSubHeaderWidth('75%')
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [expRef, contactRef, projectsRef])

  return (
    <>
      <h1>Riley Bruins</h1>
      <h2 style={{maxWidth: subHeaderWidth}} className='subHeader'>Driven and passionate full stack developer</h2>
      <div id="aboutMeCont">
        <div className='aboutMe'>
          <h2>About Me</h2>
          <p>
            I am a full stack developer with 3+ years of experience building websites.
            I love programming and I have worked on countless projects, both in teams and by myself.
          </p>
        </div>
        <div id="aboutMeDivider" style={{borderRight: '1px solid white'}}></div>
        <div className='aboutMe'>
          <h2>My Priorities</h2>
          <p>
            When building a website (or any application), I always make sure that it is performant and simple
            to navigate. Nobody wants to wait forever or get lost figuring out a website!
          </p>
        </div>
      </div>
      <Experience standAlone={false} ref={expRef} />
      <Projects standAlone={false} ref={projectsRef} />
      <Contact standAlone={false} ref={contactRef} />

      <Canvas style={canvasStyle}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
        <pointLight position={[5, 10, 10]} intensity={0.5} />
        <Torus rotation-y={Math.PI / 3} points={5}/>
        <Torus rotation-y={Math.PI / 2} rotation-x={Math.PI / 3} scale={0.5} points={4} />
        <Torus rotation-y={Math.PI} rotation-x={2 * Math.PI / 3} scale={0.25} points={3} />
        <Box />
      </Canvas>
    </>
  )
}