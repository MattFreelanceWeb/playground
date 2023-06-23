import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { yourContent } from '../data/data'

type Props = {objectFunnel:any,setObjectFunnel:Function, actualIndex:number}

function ContentFunnel({objectFunnel, setObjectFunnel, actualIndex }: Props) {
    const [selected, setSelected] = useState(0)

    const findIByname =(array:{id:string}[],name:string)=>{
      for (let i = 0; i < array.length; i++){
        if(array[i].id === name){
          return i
        }
      }
      return -1
    }
      useEffect(() => {
        let indexInObject = findIByname(yourContent, objectFunnel.content)
        setSelected(indexInObject)
      }, [objectFunnel.content])

  return (
    <section className={`min-h-[400px] text-white flex flex-col items-start justify-start gap-4 mt-4 duration-300 ${actualIndex === 1 ? 'translate-x-0 ':'-translate-x-full '}`}>
    <div className="flex flex-col justify-center">
      <h2 className="">Quel contenu/format à promouvoir ?</h2>
      <p className="text-sm font-thin text-gray-300">
        Choix du contenu/format à promouvoir:
      </p>
    </div>
    <div className="grid grid-cols-3 gap-4 self-center">
      {yourContent.map((item, i) => (
        <div key={i} className={`${item.name === yourContent[selected].name ? 'bg-gradient-to-r from-[#FCB045] from-2% via-[#FD1D1D] via-20% to-[#833AB4] to-99%':''} p-0.5 rounded-md hover:scale-105 duration-100`}>
          <div
            id={item.id}
            onClick={()=>{setSelected(i),setObjectFunnel({...objectFunnel, customer:item.id})}}
            className="w-24 h-24 flex flex-col items-center justify-center p-2 rounded-md bg-gray-800 text-xs gap-2 text-center text-ellipsis cursor-pointer"
          >
            <Image src={item.svg} alt={""} />
            <span className="">{item.name} </span>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default ContentFunnel