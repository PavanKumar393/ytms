import React from 'react'

const Button = ({data}) => {
   
  return (
    <>
    <button className='btn px-10 py-2  text-blue-400 bg-white shadow-xl  rounded- text-xl active:scale-95 w-fit'>{data}</button>
    </>
  )
}

export default Button