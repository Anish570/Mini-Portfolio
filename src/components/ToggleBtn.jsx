import React, { useEffect, useState } from 'react'

const ToggleBtn = () => {
    const [themeMode,setThemeMode] = useState('dark')
    const onChangebtn = (e)=>{
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus){
            setThemeMode("dark")

        }else(
            setThemeMode("light")
        )
    }
    useEffect(()=>{
        document.querySelector('html').classList.remove('dark','light');   
        if(themeMode==="dark"){
            document.querySelector('html').classList.add('dark')
        }else{
            document.querySelector('html').classList.add('light')
        }
    },[themeMode])
  return (
    <div className='absolute right-4 top-2'>
         <label className="relative inline-flex items-center cursor-pointer ">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangebtn}
        checked={themeMode==="dark"}
      />
      {/* w-11 h-6 after:top-[2px] after:left-[2px] after:w-5 after:h-5  */}
      <div className="w-6 h-3 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
       peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full 
       peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
       after:content-[''] after:absolute  after:bg-white after:top-[1px] after:left-[1px] md:after:top-[2px] md:after:left-[2px]
        after:border-gray-300 after:border after:rounded-full after:h-2.5 after:w-2.5 md:after:h-5 md:after:w-5
        after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      {/* <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span> */}
    </label>
    </div>
  )
}

export default ToggleBtn