
import React, { useState } from 'react'
import DateCard from "./DateCard"

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

    // NEW: Saved Date Button Disable 
    const [saved, setSaved] = useState(false)


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
                "https://confirm-date.onrender.com/api/dates",
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

            // Minimum 2.5 seconds loading 
            await new Promise(resolve => setTimeout(resolve, 1000) )


            
            console.log("Date saved successfully ❤️", data)

            // Date successfully saved 
            setSaved(true)

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



            {/* This Is The Date Card */}
            {/* <div className="border rounded-2xl p-6 w-full max-w-md shadow-lg mt-4">

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

            </div>  */}
            <DateCard date={date} time={time} place={place} activity={activity} />
            


            {/* NEW: Error message */}
            {error && (
                <p className="text-red-500 mt-4 text-center">
                    {error}
                </p>
            )}


            {/* NEW: Confirm button */}
            {/* <button
                className="btn cursor-pointer mt-6"
                onClick={handleConfirm}
                disabled={loading}
            >
                {loading
                    ? "Saving... ❤️"
                    : "Confirm Date ❤️"
                }
            </button> */}
            
            {/* CONFIRM BUTTON */}

            {/* <button
                    onClick={handleConfirm}
                    disabled={loading}
                className="mt-8 px-6 py-3 rounded-2xl border border-rose-300 text-rose-600 font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 disabled:opacity-50 my-5 "
            >
                    {loading
                        ? "Saving Date... ❤️"
                        : "Confirm This Date ❤️"
                    }
            </button>  */}


            <button
                onClick={handleConfirm}
                disabled={loading || saved}
                className={`mt-8 px-6 py-3 rounded-2xl border font-semibold transition-all duration-300 my-5
                    ${
                        saved
                            ? "border-green-300 bg-green-50 text-green-600 cursor-not-allowed"
                            : "border-rose-300 text-rose-600 hover:bg-rose-500 hover:text-white"
                    }
                    ${
                        loading
                            ? "opacity-70 cursor-wait"
                            : ""
                    }
                `}
            >
                {loading
                    ? "Saving Date... ❤️"
                    : saved
                        ? "Date Saved Successfully ✅"
                        : "Confirm This Date ❤️"
                }
            </button>



            {/* Whatsapp Button  */}
            {/* <button
                onClick={() => {
                    const message = `Hey Anmol! 🥹❤️

            Date officially confirmed!

            📅 Date: ${formattedDate}
            ⏰ Time: ${formattedTime}
            📍 Place: ${place}
            ✨ Plan: ${activity}

            See you! 🫶🏻`;

                    const Mobile='918810442629'
                    const whatsappUrl = `https://wa.me/${Mobile}?text=${encodeURIComponent(message)}`;

                    window.open(whatsappUrl, "_blank");
                }}
                className="border border-green-400 text-green-600 px-6 py-3 rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
                💚 Confirm on WhatsApp
            </button> */}



        </div>
    )
}

export default DateConfirmation



// import React, { useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import html2canvas from 'html2canvas'
// import DateCard from "./DateCard"

// const DateConfirmation = () => {

//     const location = useLocation()
//     const navigate = useNavigate()

//     const { date, time, place, activity } = location.state || {}

//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState("")
//     const [imageLoading, setImageLoading] = useState(false)

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

//     const handleConfirm = async () => {

//         try {

//             setLoading(true)
//             setError("")

//             const response = await fetch(
//                 "http://localhost:5000/api/dates",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         date,
//                         time,
//                         place,
//                         activity,
//                     }),
//                 }
//             )

//             const data = await response.json()

//             if (!response.ok) {
//                 throw new Error(data.message || "Something went wrong")
//             }

//             console.log("Date saved:", data)

//         } catch (error) {

//             console.error(error)
//             setError(error.message)

//         } finally {
//             setLoading(false)
//         }
//     }

//     const handleDownloadCard = async () => {

//         try {

//             setImageLoading(true)

//             const card = document.getElementById("date-card")

//             const canvas = await html2canvas(card, {
//                 scale: 2,
//                 useCORS: true,
//                 backgroundColor: null,
//             })

//             const link = document.createElement("a")

//             link.download = "date-confirmation.png"
//             link.href = canvas.toDataURL("image/png")

//             link.click()

//         } catch (error) {

//             console.error("Image generation failed:", error)

//         } finally {

//             setImageLoading(false)

//         }
//     }

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">

//             <h1 className="text-4xl font-bold text-center mb-3">
//                 IT'S A DATE!!! 🥹❤️
//             </h1>

//             <p className="text-center mb-8">
//                 Okay, this is officially happening 😭💕
//             </p>


//             {/* DATE CARD */}

//             <DateCard
//                 date={date}
//                 time={time}
//                 place={place}
//                 activity={activity}
//             />


//             {/* ERROR */}

//             {error && (
//                 <p className="text-red-500 mt-5">
//                     {error}
//                 </p>
//             )}


//             {/* CONFIRM BUTTON */}

//             <button
//                 onClick={handleConfirm}
//                 disabled={loading}
//                 className="mt-8 px-6 py-3 rounded-2xl border border-rose-300 text-rose-600 font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 disabled:opacity-50"
//             >
//                 {loading
//                     ? "Saving Date... ❤️"
//                     : "Confirm This Date ❤️"
//                 }
//             </button>


//             {/* DOWNLOAD BUTTON */}

//             <button
//                 onClick={handleDownloadCard}
//                 disabled={imageLoading}
//                 className="mt-4 px-6 py-3 rounded-2xl border border-green-300 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 disabled:opacity-50"
//             >
//                 {imageLoading
//                     ? "Creating Card... ✨"
//                     : "Save Date Card 📸"
//                 }
//             </button>

//         </div>
//     )
// }

// export default DateConfirmation


