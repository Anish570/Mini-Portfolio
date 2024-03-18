import React from 'react'
import {Intro,Projects,Socials} from './components/index'
import { SiGmail } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import Projectsdata from './datas/Projectsdata';

function App() {
  const sociallinks= [
    {
        icon: <SiGmail/>,
        title: 'Gmail',
        link: 'https://mail.google.com/mail/u/0/?hl=en&view=cm&tf=1&fs=1&to=anishgautam2024@gmail.com',
    },
    {
      icon: <PiGithubLogoFill/>,
      title: 'Github',
      link: 'https://www.github.com/Anish570',
  },
  {
    icon: <TfiLinkedin/>,
    title: 'Linkedin',
    link: 'anishgautam@gmail.com',
},

];

  return (
    <div className='pl-[10px] pt-[3px] md:pl-[16px] md:pt-[6px] '>
    <Intro/>
    <div className='flex flex-wrap items-center gap-2'>
    {
    sociallinks.map((item)=>(
      <Socials data={item}/>
    ))
  }
    </div>
   <div>
    <h3>Projects</h3>
    {
      Projectsdata.map((item)=>(
        <Projects data={item}/>
      ))
    }
   </div>
    </div>
  )
}

export default App
