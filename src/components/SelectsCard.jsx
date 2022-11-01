import React from 'react'


const SelectsCard = (props) => {
  return (
    <div className='relative'>
      <img className='w-full h-full' src={props.bg} />
      <div className='bg-gray-900/10 absolute top-0 left-0 w-full h-full'>
        <p className='absolute left-4 bottom-4 text-2xl text-white font-bold '>{props.text}</p>
      </div>
    </div>
  )
}

export default SelectsCard