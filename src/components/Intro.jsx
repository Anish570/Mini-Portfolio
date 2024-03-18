import React from 'react'
import Typewriter from 'typewriter-effect'


const Intro = () => {
  return (
    <>
    <div>
        <img src="" alt="profile img"  className='bg-slate-600 w-[60px] h-[60px] md:w-[100px] md:h-[100px]' />
       
        <h3 className='text-[23px] md:text-[45px] mt-[15px] mb-[15px]'>Hey there!👋  <span className='text-cyan-500'> 
        <Typewriter 
         options={{
          strings:[ "I'm Anish"],
          autoStart: true,
          loop:true
         }}
         />
          </span> </h3>
        <div className='mb-[10px] text-[13px] md:text-[19px] flex flex-col gap-3'>
        <p className='flex flex-col'>
                    on a journey to become a skilled web developer with a knack for crafting
                    seamless digital experiences. Drawing from a strong foundation in HTML5, CSS3, JavaScript, PHP, 
                    and few on Laravel, I'm eager to carve my path in the world of web development.
            </p>  <p>     
               Currently focused on mastering React, I'm driven by the prospect of building dynamic web 
               applications that enhance user experiences.
            </p> <p>
              Beyond coding, I'm a curious learner, constantly seeking out new challenges and opportunities
               to expand my knowledge and expertise.
               </p> <p>
              Let's connect and embark on this exciting journey together! 😊
              </p>
        </div>
   
    </div>
    </>
  )
}

export default Intro