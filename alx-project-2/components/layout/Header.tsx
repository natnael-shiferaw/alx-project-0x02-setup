import about from '@/pages/about'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
        <div>Header</div>
        <Link href='/about'>About</Link>
        <Link href='/home'>Home</Link>
    </>
  )
}

export default Header