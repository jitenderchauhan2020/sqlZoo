import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function RightBar() {
  return (
    <div className='flex flex-col bg-gray-900 w-1/5 h-auto'>
        <Image
           src = "/NavLogo.jpg"
           width={170}
           height={170}
           alt='Picture of the author'
        />

        <div className='flex flex-row bg-blue-200' >
          <ul>
            <li>more Content</li>
            <li>more Content</li>
            <li>more Content</li>
            <li>more Content</li>
            <li>more Content</li>
          </ul>
        </div>

        <div className='flex flex-row bg-blue-200' >
          <ul>
            <li>more Content</li>
            <li>more Content</li>
            <li>more Content</li>
            <li>more Content</li>
            <li>more Content</li>
          </ul>
        </div>
    </div>
  )
}

export default RightBar