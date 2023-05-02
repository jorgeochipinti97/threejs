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



export default function EnglishPage() {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'black', height: '100vh', flexWrap: 'wrap', }}>

                <div style={{ display: 'flex', alignContent: 'start', justifyContent: 'center', backgroundColor: 'black',  }}>
                    <div style={{ color: 'white',  alignSelf: 'center', backgroundColor: 'rgba(159,134, 192 ,0.3)', padding: 5, borderRadius: '9px', fontFamily: 'Montserrat', maxWidth: '40%%', marginInline: 10, fontSize: '15px', textAlign: 'justify', hyphens: 'auto', zIndex: '1' ,marginTop:'300px'}}>
                        <div style={{ margin: '5px' }}>
                            <Typewriter
                                onInit={(typewriter: any) => {
                                    typewriter
                                        .pauseFor(3000)
                                        .typeString('Hi there! I m EduAi, an AI designed to help you with everything related to language, both linguistically and academically.')
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString('I offer language coaching services, study support, flashcard creation, translation and text summarization, and can even provide you with relevant content to help you deepen your studies or answer any questions you may have')
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString('I m currently in beta and need people to try me out and provide feedback so that I can continue to improve. My goal is to provide you with comprehensive support throughout your learning journey, from start to finish. I m here to accompany you on your academic path and help you achieve your goals.')
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .typeString('If you re interested in trying out my services, don t hesitate to do so! I m here to offer you all my knowledge and experience, and together we can make your language learning experience easier and more effective.                    .')
                                        .start();
                                }}
                            />

                        </div>
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
