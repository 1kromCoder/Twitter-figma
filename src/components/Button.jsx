import React from 'react'

const Button = ({ type, extraClass, title }) => {
    return (
        <button type={type} className={`w-full h-14 text-lg font-semibold bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full ${extraClass}`}>
            {title}
        </button>
    )
}

export default Button