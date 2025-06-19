import React from 'react';
import CallToAction from './CallToAction';

export default function Hero() {
  return (
    <div className='py-24 sm:py-28 md:py-32 flex flex-col gap-4 sm:gap-8'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-semibold '>
        <span className='textGradient'>Swello </span>
        is a platform built to boost your career in tech — from community help to coding interviews in software, AI, and data fields.
      </h1>
      <CallToAction />
    </div>
  )
}
