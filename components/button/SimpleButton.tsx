import Link from 'next/link'
import React from 'react'

type Props = {content:string}

function SimpleButton({content}: Props) {
  return (
    <Link href='' className='py-2 px-12 bg-black text-white rounded-lg'>
        {content}
    </Link>
  )
}

export default SimpleButton