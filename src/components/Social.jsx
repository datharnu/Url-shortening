import React from 'react'
import Facebook from '../assets/images/icon-facebook.svg'
import Instagram from '../assets/images/icon-instagram.svg'
import Twitter from '../assets/images/icon-twitter.svg'
import Printerest from '../assets/images/icon-pinterest.svg'
export default function Social() {
    return (
        <section className='lg:-mt-7'>

            <div className='flex gap-8 justify-center py-10'>
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={Printerest} />
                <img src={Instagram} />


            </div>
        </section>
    )
}
