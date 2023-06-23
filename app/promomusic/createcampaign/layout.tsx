import Funnel from '@/components/promomusic/funnel/Funnel'
import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

function layout({children}: Props) {
  return (
    <div className='h-full w-full'>
        <Funnel/>
        {children}
    </div>
  )
}

export default layout