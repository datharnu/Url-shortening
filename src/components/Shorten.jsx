/* eslint-disable no-undef */
import React from 'react'
import { useState, useEffect } from 'react'
import { data } from 'autoprefixer';
import icon1 from '../assets/images/icon-brand-recognition.svg'
import icon2 from '../assets/images/icon-detailed-records.svg'
import icon3 from '../assets/images/icon-fully-customizable.svg'
import Line from './Line';
import Features from './Features';

export default function Shorten() {
    const [text, setText] = useState("")
    const [url, setUrl] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!text) {
            alert('Input is empty');
        } else {
            try {
                const response = await fetch(`https://cleanuri.com/api/v1/shorten`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url }),
                    mode: 'no-cors'
                });

                if (!response.ok) {
                    console.error('Error:', response.statusText);
                    // Handle the error, e.g., show an error message to the user
                } else {
                    const data = await response.json();
                    console.log(data);  // Display the response data
                    setText(data);
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle other errors, e.g., show an error message to the user
            }
        }
    };

    // useEffect(() => {
    //     fetchText();
    // }, []);











    return (
        <section className='  bg-neww lg:pb-32 pb-20'>

            <div className='sm:bg-formImg py-5 bg-no-repeat  bg-right-top rounded-xl bg-darkV lg:bg-formImgB  mx-5 mt-28 relative bottom-20 lg:mx-20 '>
                <form className='flex flex-col text-center gap-5'
                    onSubmit={handleSubmit}>

                    <div className=' flex sm:flex-col gap-5 px-5 lg:px-16 py-4'>
                        <input
                            className='rounded-md w-full py-2 outline-redd pl-5'
                            type='url'
                            placeholder='Shorten a link here...'
                            value={text}
                            onChange={(e) => setText(e.target.value)} />
                        <button className='bg-cyan lg:w-[20%] text-white font-bold py-2 rounded-md'
                            type="submit" onClick={handleSubmit}>Shorten It!</button>
                    </div>
                </form>
            </div>

            <div>
            </div>
            <article className=' mx-5'>
                <div className='text-center space-y-5 pb-20 '>
                    <h1 className='font-bold text-3xl'>Advanced Statistics</h1>
                    <p className='text-[20px] text-grayV lg:mx-48  '>Track how your links are performing across the web with our
                        advanced statistics dashboard.</p>
                </div>
                <div className='lg:flex gap-5 lg:mx-20 '>
                    <Features clx='' title='Brand Recognition' image={icon1} info='Boost your brand
    recognition with each click. Generic links don’t mean a thing. Branded links
    help instil confidence in your content.' />
                    <Line />
                    <Features clx='lg:translate-y-10' title='Detailed Records' image={icon2} info='Gain insights into
    who is clicking your links. Knowing when and where people engage with your
    content helps inform better decisions.' />
                    <Line />
                    <Features clx='lg:translate-y-20' image={icon3} title='Fully Customizable' info='Improve brand
    awareness and content discoverability through customizable links,
    supercharging audience engagement.' />
                </div>
            </article>

        </section>
    )
}
