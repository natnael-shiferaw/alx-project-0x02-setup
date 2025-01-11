import about from '@/pages/about'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
          <nav>
              <ul>
                  <li>
                      <Link href='/home'>Home</Link>
                  </li>
                  <li>
                      <Link href='/about'>About</Link>
                  </li>
              </ul>
          </nav>
    </>
  )
}

export default Header