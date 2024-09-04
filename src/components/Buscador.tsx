import React from 'react'

function Buscador() {
  return (
    <form className='w-full flex items-center justify-center gap-2  md:justify-end mt-2'>
        <input type="text" name="" id="" placeholder='Buscar...' className='px-2 py-2  text-xl bg-white/90 rounded-xl outline-none' />
        <button className='bg-sky-950 px-4 py-2 rounded-xl text-xl font-semibold  text-white'>Buscar</button>
    </form>
  )
}

export default Buscador