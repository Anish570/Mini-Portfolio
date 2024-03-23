import React from 'react'

const Projects = ({data}) => {
  return (
    <>
    <div className='relative flex flex-col items-center bg-slate-800/45 border-1px border-slate-700 rounded-lg w-[250px] h-[270px] pt-[10px] '>
    <h6 className='text-white'>{data.title}</h6>
    <img src={data.preview} alt="preview" className='w-full my-4 object-cover h-[170px] p-2 rounded-lg' />
    <button  className='bg-slate-700 border-1px border-slate-800 py-1 px-3 rounded-lg  hover:bg-cyan-500 mb-[10px] z-[2]'>
      <a  href={data.link} target="_blank" rel="noopener noreferrer" className='text-[11px] md:text-[16px]'>Live Preview</a></button>
      <div className='absolute left-0 top-0 bg-black w-full h-full rounded-lg opacity-40 z-[1]'></div>
    </div>
    
    </>
  )
}

export default Projects