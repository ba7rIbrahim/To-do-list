import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {

  return (
    <div className='container text-center flex flex-col gap-10 h-[100vh] justify-between py-20'>
      <div className='text-primary text-4xl font-bold'>Doingly</div>
      <div className='flex flex-col items-center'>
        <Image src='/homePage.svg' alt='Home Page' width={200} height={200} className='w-full md:w-1/2' />
        <div className={`text-[#9b9999] px-10 mt-12`}>
          <h1 className='font-bold text-xl mt-2 mb-3'>Welcome to Doingly</h1>
          <p className='text-[15px] '>Doingly will helps you to stay organized and perform your tasks much faster.</p>
        </div>
      </div>
      <div className='text-center w-full md:w-1/2 mx-auto'><Link href='/MainTasksPage' className='bg-primary text-white py-2 font-semibold rounded block hover:bg-hover duration-200'>Get Started</Link></div>
    </div>
  )
}
