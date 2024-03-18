import React from 'react'

const Projects = ({data}) => {
  return (
    <>
    <div className='flex flex-col items-center bg-slate-800/45 border-1px border-slate-700 rounded-lg w-[250px] h-[270px] pt-[10px] '>
    <h6>{data.title}</h6>
    <img src={data.preview} alt="preview" className='w-full my-4 object-cover h-[170px] p-2 rounded-lg' />
    <button  className='bg-slate-700 border-1px border-slate-800 py-1 px-3 rounded-lg  hover:bg-cyan-700'>
      <a href={data.link} target="_blank" rel="noopener noreferrer">Live Preview</a></button>
    </div>
    </>
  )
}

export default Projects