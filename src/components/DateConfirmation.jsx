
// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const DateConfirmation = () => {

//     const location = useLocation()
//     const navigate = useNavigate()



//     const {
//         date,
//         time,
//         place,
//         activity
//     } = location.state || {}

  

//     if (!location.state) {
//         return (
//             <div className="min-h-screen flex flex-col items-center justify-center">

//                 <h1 className="text-2xl font-bold mb-4">
//                     Oops! No date details found 😭
//                 </h1>

//                 <button
//                     className="btn"
//                     onClick={() => navigate('/schedule')}
//                 >
//                     Schedule a Date ❤️
//                 </button>

//             </div>
//         )
//     }



//     const formattedDate = new Date(date).toLocaleDateString(
//         'en-IN',
//         {
//             day: 'numeric',
//             month: 'long',
//             year: 'numeric'
//         }
//     )

//     const formattedTime = new Date(`1970-01-01T${time}`).toLocaleTimeString(
//         'en-US',
//         {
//             hour: 'numeric',
//             minute: '2-digit',
//             hour12: true
//         }
//     )

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center px-4">

//             <h1 className="text-4xl font-bold text-center mb-3">
//                 IT'S A DATE!!! 🥹❤️
//             </h1>

//             <p className="text-center mb-8">
//                 Okay, this is officially happening 😭💕
//             </p>

//             <div className="border rounded-2xl p-6 w-full max-w-md shadow-lg mt-4">

//                 <p className="mb-4">
//                     📅 <strong>Date:</strong> {formattedDate}
//                 </p>

//                 <p className="mb-4">
//                     ⏰ <strong>Time:</strong> {formattedTime}
//                 </p>

//                 <p className="mb-4">
//                     📍 <strong>Place:</strong> {place}
//                 </p>

//                 <p>
//                     ✨ <strong>Plan:</strong> {activity}
//                 </p>

//             </div>

//         </div>
//     )
// }

// export default DateConfirmation




import React, { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

const DateConfirmation = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const {
        date,
        time,
        place,
        activity
    } = location.state || {}

    // NEW: Loading state
    const [loading, setLoading] = useState(false)

    // NEW: Error state
    const [error, setError] = useState("")


    if (!location.state) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">

                <h1 className="text-2xl font-bold mb-4">
                    Oops! No date details found 😭
                </h1>

                <button
                    className="btn"
                    onClick={() => navigate('/schedule')}
                >
                    Schedule a Date ❤️
                </button>

            </div>
        )
    }


    const formattedDate = new Date(date).toLocaleDateString(
        'en-IN',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    )

    const formattedTime = new Date(`1970-01-01T${time}`).toLocaleTimeString(
        'en-US',
        {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }
    )


    // NEW: Send date details to backend
    const handleConfirm = async () => {

        try {

            setLoading(true)
            setError("")

            const response = await fetch(
                "http://localhost:5000/api/dates",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        date,
                        time,
                        place,
                        activity
                    })
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong"
                )
            }

            console.log("Date saved successfully ❤️", data)

            // Successfully saved → Yes page
            // navigate('/yes')

        } catch (error) {

            console.error("Error saving date:", error)

            setError(
                "Oops! Something went wrong 😭 Please try again."
            )

        } finally {

            setLoading(false)

        }
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">

            <h1 className="text-4xl font-bold text-center mb-3">
                IT'S A DATE!!! 🥹❤️
            </h1>

            <p className="text-center mb-8">
                Okay, this is officially happening 😭💕
            </p>


            <div className="border rounded-2xl p-6 w-full max-w-md shadow-lg mt-4">

                <p className="mb-4">
                    📅 <strong>Date:</strong> {formattedDate}
                </p>

                <p className="mb-4">
                    ⏰ <strong>Time:</strong> {formattedTime}
                </p>

                <p className="mb-4">
                    📍 <strong>Place:</strong> {place}
                </p>

                <p>
                    ✨ <strong>Plan:</strong> {activity}
                </p>

            </div>


            {/* NEW: Error message */}
            {error && (
                <p className="text-red-500 mt-4 text-center">
                    {error}
                </p>
            )}


            {/* NEW: Confirm button */}
            <button
                className="btn cursor-pointer mt-6"
                onClick={handleConfirm}
                disabled={loading}
            >
                {loading
                    ? "Saving... ❤️"
                    : "Confirm Date ❤️"
                }
            </button>

        </div>
    )
}

export default DateConfirmation

