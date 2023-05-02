import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import THREE, { AmbientLight, Mesh } from 'three'

import Typewriter from 'typewriter-effect';

import React, { MutableRefObject, Suspense, useEffect, useRef, useState } from 'react'
import { Html, Loader, OrbitControls, useAnimations } from '@react-three/drei'
import { Box, Button, TextField, Typography } from '@mui/material'


interface Props {
  isClicked: boolean
}

const Model = ({ isClicked }: Props) => {

  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  const ref = useRef<Mesh>(null!)
  const { actions, names } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    // actions[names[0]]?.reset().fadeIn(1).play()
    // console.log(actions)



  }, [])

  useFrame(({ clock }) => {
    ref.current.rotation.y = isClicked ? clock.elapsedTime / (0.2) : 0.2// ajusta la velocidad de rotación aquí
    // ref.current.rotation.z = clock.elapsedTime / (0.2)// ajusta la velocidad de rotación aquí
    ref.current.rotation.x = clock.elapsedTime / (isClicked ? 0.2 : 4)// ajusta la velocidad de rotación aquí

  })


  return (
    <>
      <primitive object={gltf.scene} ref={ref} scale={5} />

    </>
  )
}



export default function Home() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>

      <div style={{ display: 'flex', flexDirection:'column',justifyContent: 'end', backgroundColor: 'black', height: '100vh', flexWrap: 'wrap',  }}>


        <div style={{ color: 'white', backgroundColor: 'rgba(255,175, 204 ,0.5)', padding: 5, borderRadius: '9px', fontFamily: 'Montserrat', maxWidth: '40%%', marginInline: 10, fontSize: '15px', textAlign: 'justify', hyphens: 'auto', zIndex: '1',marginBottom:'250px'}}>
          <div style={{ margin: '5px' }}>
            <Typewriter
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(2500)
                  .typeString('Soy EduAi, una inteligencia artificial diseñada para ayudarte con todo lo relacionado con el lenguaje, tanto en el ámbito lingüístico como académico.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Ofrezco servicios de coaching de lenguaje, acompañamiento en la jornada de estudio, creación de flashcards, traducción y resumen de textos, y puedo incluso proporcionarte contenido relevante para que puedas profundizar en tus estudios o resolver cualquier duda que puedas tener.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Mi objetivo es proporcionarte un apoyo integral durante todo el proceso de aprendizaje, desde el primer paso hasta el último. Estoy aquí para acompañarte durante todo tu camino académico y ayudarte a lograr tus objetivos.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Estoy actualmente en periodo beta y necesito que las personas me prueben y me brinden su feedback para seguir mejorando. Mi objetivo es proporcionarte un apoyo integral durante todo el proceso de aprendizaje, desde el primer paso hasta el último. Estoy aquí para acompañarte durante todo tu camino académico y ayudarte a lograr tus objetivos.')
                  .start();
              }}
            />
          </div>

        </div>

      </div>

      <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', position: 'fixed', bottom: 70, backgroundColor: 'black' }}>
        <Canvas camera={{ position: [0, -200, 0], }}>
          <Suspense>

            <Model isClicked={isClicked} />
          </Suspense>
        </Canvas>
      </div>

      {/* 
        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'column', width: '100vw' }}>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
            <TextField variant='standard' placeholder='Chat' color='secondary' sx={{
              width: '80vw',
              colorBottom: 'white', '& input:valid + fieldset': {
                borderBottom: '1px solid white', color: 'white'

              }, '& .MuiInputBase-input': {

                position: 'relative',

                color: 'white', borderBottom: '1px solid white',
              }
            }} />
          </div>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', }}>
          <Button variant='outlined' color='secondary' sx={{ color: 'white', width: '15%', mb: 3 }}>
            Send
          </Button>
        </div> */}


    </>
  )
}
