import React from 'react'
import Theme from './Theme'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar bg-primary text-white w-full">
      <div className='container flex items-center justify-between'>
        <Link href='/' className="btn btn-ghost text-xl p-0">Doingly</Link>
        <Theme />
      </div>
    </div>
  )
}
