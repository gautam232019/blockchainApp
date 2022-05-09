import React from 'react'
import Image from 'next/image'



const CoinNameRow = ({name,icon}) => {
  return (
    <div className='flex'>
        <Image alt='icon' src={icon} height={20} width={20}/>
        <p>&nbsp; {name}</p>
    </div>
  )
}

export default CoinNameRow