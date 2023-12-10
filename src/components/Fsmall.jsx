import React from 'react'

export default function Fsmall({ title, children }) {
    return (
        <div className='lg:-mt-8'>
            <h1 className='text-white font-bold text-xl my-10 '>{title}</h1>
            <div className='flex flex-col gap-2 text-grayV text-lg'>{children}</div>
        </div>
    )
}
