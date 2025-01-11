import about from '@/pages/about'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
          <nav className=' shadow-md'>
              <ul className='flex gap-4 justify-end m-6'>
                  <li>
                      <Link href='/home'>Home</Link>
                  </li>
                  <li>
                      <Link href='/about'>About</Link>
                  </li>
                  <li>
                      <Link href='/pages'>Pages</Link>
                  </li>
              </ul>
          </nav>
    </>
  )
}

export default Header