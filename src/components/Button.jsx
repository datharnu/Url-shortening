import React from 'react'

export default function Button({ title, cls }) {
    return (
        <div className={`${cls}`}>
            <div className="bg-cyan max-w-[40%] m-auto rounded-full py-4 text-white " >
                <button className="">
                    {title}
                </button>
            </div>
        </div>
    )
}
