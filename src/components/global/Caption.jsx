import React from 'react'

const Caption = ({ title, details }) => {
    return (
        <div>
            <div className=' text-center mb-10 w-full md:w-[500px] mx-auto'>
                <h2 className=' text-2xl md:text-3xl lg:text-4xl font-semibold capitalize'><span className=' font-medium'></span> {title}</h2>
                <p className=' text-dark mt-3 font-light'>{details}</p>
            </div>
        </div>
    )
}

export default Caption