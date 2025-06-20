import React, { useState } from 'react'
import { CloseEye, OpenEye } from '../assets/icons'

const Input = ({ onChange, placeholder, type, name }) => {
    const [passType, setPassType] = useState(false)

    return (
        <>
        {type == "password" ?
        <div className="relative w-full">
             <input type={passType ? "text" : "password"} placeholder={placeholder} onChange={onChange} className="outline-none w-full py-[23px] px-[22px] border-[1px] h-14 text-lg border-gray-300 rounded-md" required name={name}/>
             <div onClick={() => setPassType(!passType)} className="absolute top-[20px] right-[15px]">
                <button type="button" className={passType ? "" : "hidden"}> <OpenEye/> </button>
                <button type="button" className={passType ? "hidden" : ""}> <CloseEye/> </button>
             </div>
        </div> 
         : <input type={type} placeholder={placeholder} onChange={onChange} className="outline-none py-[23px] px-[22px] border-[1px] h-14 text-lg border-gray-300 rounded-md" required name={name}/> }
        </>
    )
}

export default Input