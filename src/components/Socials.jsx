import React from 'react'


const Socials = ({data}) => {
   
  return (
    <>
    <div className='flex  items-center gap-1 rounded-sm hover:bg-cyan-700 text-white
     bg-slate-700 border-1px border-gray-400 py-1 px-3 transition-all duration-[0.2s] ease-in mb-[10px]'>
     <a href={data.link} target='_blank'> {data.icon} </a>
      <a href={data.link} target='_blank'> <h3>{data.title}</h3> </a>
    </div>
    </>
  )
}

export default Socials