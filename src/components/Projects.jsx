import React from 'react'

const Projects = ({data}) => {
  return (
    <>
    <h6>{data.title}</h6>
    <img src={data.preview} alt="preview" />
    <button><a href={data.link} target="_blank" rel="noopener noreferrer">Live Preview</a></button>
    </>
  )
}

export default Projects