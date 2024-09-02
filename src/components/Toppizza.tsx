
import React from 'react'
import Image from 'next/image'
import Pizzapeperoni from "@/components/images/pizzapeperoni.jpg"
function Toppizza() {
  return (
    <div>
        <Image src={Pizzapeperoni} alt="pizza de peperoni" className='w-full h-48 object-cover' />
    </div>
  )
}

export default Toppizza