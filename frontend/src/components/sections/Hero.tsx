import React from 'react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-4 sm:gap-8'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-semibold '>
        <span className='textGradient'>Swello </span>
        is a platform built to boost your career in tech — from community help to coding interviews in software, AI, and data fields.
      </h1>
      <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
        <Button text="Sign Up" />
        <Button text="Login" dark />
      </div>
    </div>
  )
}
