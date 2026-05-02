import React from 'react'

const Yes = () => {
    return (
        <div>

            <div>
                <h1 className="header_text">Yeeyy ! Finally </h1>
                <h1 className="header_text">Thank you So Muchh</h1>
            </div>
            <div className="gif_container flex flex-col ">
                <img
                    className='h-70 w-70 mx-auto'
                    src="https://i.postimg.cc/wTDG30TB/yes.gif"
                    alt="Cute animated illustration"
                />
            </div>
            {/* <button className="btn" id="yesButton" onclick="nextPage()">
            Let's Fix a Date
          </button> */}

          <div>
            <h2>Connect With Me Please.. <a href="https://www.instagram.com/theanmolkathuria/" className='text-[#d2691e]'> @theanmolkathuria </a></h2>
          </div>

        </div>
    )
}

export default Yes