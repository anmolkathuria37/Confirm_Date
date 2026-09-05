import React from 'react'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'

const Yes = () => {

    const navigate = useNavigate()



    return (
        <div className=''>

            <div>
                <h1 className="header_text">Yeeyy ! Finally </h1>
                <h1 className="header_text">Thank you So Muchh</h1>
            </div>
            <div className="gif_container flex flex-col ">
                <img
                    className='h-70 w-70 mx-auto'
                    src='/yes.gif'
                    alt="Cute animated illustration"
                />
            </div>
            <button className=" cursor-pointer group relative overflow-hidden border border-amber-200 shadow-lg  shadow-rose-200/40 transition-all duration-300    hover:-translate-y-2  hover:border-amber-300 hover:shadow-xl active:scale-95 m-8 mt-10 p-2 rounded-2xl hover:scale-110"
                onClick={() => navigate('/schedule')}
            >
                <span className="relative z-10 !m-0 !p-0">
                    Let's Fix a Date
                    <span className="inline-block ml-2 transition-transform duration-300 group-hover:scale-125">
                        ❤️
                    </span>
                </span>
            </button>

            <div>
                <h2>Connect With Me Please.. <a href="https://www.instagram.com/theanmolkathuria/" className='text-[#d2691e]'> @theanmolkathuria </a></h2>
            </div>

            <Footer />

        </div>
    )
}

export default Yes