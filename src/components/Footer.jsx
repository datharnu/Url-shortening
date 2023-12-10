import React from 'react'
import Fsmall from './Fsmall'
import Social from './Social'

export default function Footer() {
    return (
        <section className='bg-vdarkV sm:text-center'>
            <div className='py-20 lg:flex lg:gap-36 mx-20'>
                <h1 className='text-white text-4xl font-bold'>Shortly</h1>
                <Fsmall title='Features' >
                    <a href='#'>Light Shortening</a>
                    <a href='#'>Branded Links</a>
                    <a href='#'>Analytics</a>
                </Fsmall>
                <Fsmall title='Resources' >
                    <a href='#'>Blog</a>
                    <a href='#'>Developers</a>
                    <a href='#'>Support</a>
                </Fsmall>
                <Fsmall title='Company' >
                    <a href='#'>About</a>
                    <a href='#'>Our Teams</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Contact</a>
                </Fsmall>
                <Social />
            </div>
        </section>
    )
}
