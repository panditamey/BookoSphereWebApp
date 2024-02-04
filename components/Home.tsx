"use client"
import { Button } from '@chakra-ui/react'
import React from 'react'

function Home() {
    return (
        <>
            <div className=" h-screen w-screen flex items-center justify-center max-md:flex-col bg-white">
                <div className="">
                    <img width={500} src="mock1.png" alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <img width={200} src="appbar.png" alt="" />
                    <span className='font-bold'>Generate and Read Books of Your Own Choice</span>
                    <br />
                    <span>Download the Android App now</span>
                    <Button className='mt-5 px-10 py-5 h-8 text-sm text-white rounded-full border-purple-100 border-solid border-2 bg-purple-500' onClick={
                        () => {
                            window.location.href = "https://drive.google.com/file/d/1ax0SWbuhusXjWxaqJJU7k1F0vIx7f4VL/view?usp=drive_link"
                        }
                    }
                    >
                        Try Android App 📱
                    </Button>
                    <Button className='mt-5 px-10 py-5 h-8  text-sm text-white rounded-full border-purple-100 border-solid border-2 bg-purple-500' onClick={
                        () => {
                            window.location.href = "/home"
                        }
                    }
                    >
                        Try Web App 💻
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home