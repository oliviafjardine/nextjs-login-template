import React from 'react'
import Button from '../ui/Button'

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      {/* Login title */}
      <h3 className='text-2xl sm:text-3xl md:text-4xl '>Log In to Swello</h3>
      <p>You're one step away!</p>

      {/* Input email and password */}
      <input className='w-full max-w-[300px] mx-auto px-3 duration-200 hover:border-blue-600 focus:border-blue-600 py-2 sm:py-3 border border-solid border-blue-400 rounded-full outline-none'
        placeholder='Email'/>
      <input className='w-full max-w-[300px] mx-auto px-3 duration-200 hover:border-blue-600 focus:border-blue-600 py-2 sm:py-3 border border-solid border-blue-400 rounded-full outline-none'
        placeholder='Password' type='password' />
      
      {/* Submit button */}
      <div className='max-w-[300px] w-full mx-auto'>
        <Button text='Submit' full/>
      </div>

      {/* Sign up link */}
      <p className='text-center'>Don't have an account? <span className='text-blue-600'>Sign up</span></p>
    </div>
  )
}
