import React from 'react'


export default function Features({ clx, title, image, info, }) {
    return (
        <div className={`${clx}`}>
            <div className='bg-white my-5 rounded-md'>

                <div className='flex sm:justify-center pb-7'>
                    <img src={image} className='bg-darkV p-5 -mt-10 lg:ml-10  rounded-full  ' />
                </div>

                <div className=' sm:text-center lg:text-left space-y-5 mx-5 lg:mx-7 pb-10 '>
                    <h2 className='text-[26px] font-bold'>{title}</h2>
                    <p className='text-[19px] text-grayV'>{info}</p>
                </div>
            </div>

        </div>
    )
}
