import React from 'react';
import CallToAction from './CallToAction';

export default function Hero() {
  return (
    <div className='min-h-screen justify-center py-24 sm:py-28 md:py-32 flex flex-col gap-4 sm:gap-8'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-semibold '>
        <span className='textGradient'>Swello </span>
        is a platform built to boost your{' '}
        <span className='textGradient'>tech career </span>
        in software engineering, machine learning, data science, and more.
      </h1>

      <p className='text-center text-lg max-w-xl mx-auto'>
        Get ready your next job or internship with us by connecting with other developers,
        practicing your coding skills, doing mock interviews, and perfecting your resume.
      </p>
      <CallToAction />
    </div>
  )
}
