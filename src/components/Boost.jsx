import React from 'react'
import Button from './Button'

export default function Boost() {
    return (
        <section className='sm:bg-boostImg lg:bg-boostImgB bg-no-repeat bg-cover bg-center bg-darkV '>
            <div className='text-center font-bold py-36 space-y-5' >
                <h3 className='text-white text-3xl '>Boost your links today</h3>
                <Button cls='text-xl' title="Get Started" />
            </div>
        </section>
    )
}
