'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [authenticating, setAuthenitcating] = useState(false)
  const { signup, login } = useAuth()

  async function handleSubmit() {
    if (!email || !password || password.length < 8){
      return
    }
    setAuthenitcating(true)
    try {
      if (isRegister){
        console.log('Signing up a new user')
        await signup(email, password)
      } else {
        console.log('Logging into existing user')
        await login(email, password)
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log('Unknown error during auth')
      }
    } finally {
      setAuthenitcating(false)
    }
  }

  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      {/* Login title */}
      <h3 className='text-2xl sm:text-3xl md:text-4xl '>{isRegister ? 'Create your Swello account' : 'Login to Swello'}</h3>
      <p>You're one step away!</p>

      {/* Input email and password */}
      <input id="email" name="email" autoComplete="email" value={email} onChange={(e) => {
        setEmail(e.target.value)
      }} className='w-full max-w-[300px] mx-auto px-3 duration-200 hover:border-blue-600 focus:border-blue-600 py-2 sm:py-3 border border-solid border-blue-400 rounded-full outline-none'
        placeholder='Email'/>
      <input id="password" name="password" autoComplete="current-password" value={password} onChange={(e) => {
        setPassword(e.target.value)
      }} className='w-full max-w-[300px] mx-auto px-3 duration-200 hover:border-blue-600 focus:border-blue-600 py-2 sm:py-3 border border-solid border-blue-400 rounded-full outline-none'
        placeholder='Password' type='password' />
      
      {/* Submit button */}
      <div className='max-w-[300px] w-full mx-auto'>
        <Button onClick={handleSubmit} text={authenticating ? 'Submitting' : 'Submit'} full/>
      </div>

      {/* Sign up link */}
      <p className='text-center'>{isRegister ? 'Already have an account? ' : 'Don\'t have an account? '}
        <button onClick={() => setIsRegister(!isRegister)} 
        className='text-blue-600'>{isRegister ? 'Sign in' : 'Sign up'}
        </button>
      </p>
    </div>
  )
}
