
import React from "react"

const DateCard = ({ date, time, place, activity }) => {

    const formattedDate = new Date(date).toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    )

    const formattedTime = new Date(
        `1970-01-01T${time}`
    ).toLocaleTimeString(
        "en-US",
        {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }
    )

    return (
        <div
            id="date-card"
            className="w-full max-w-[420px] mx-auto p-8 rounded-[32px] bg-gradient-to-br from-rose-50 via-white to-pink-100 border border-rose-200 shadow-2xl mt-7"
        >
            {/* Header */}
            <div className="text-center">
                <p className="text-sm tracking-[0.3em] uppercase text-rose-400 font-semibold">
                    A little something special
                </p>

                <h1 className="text-4xl font-bold !text-rose-500 mt-4">
                    It's a Date! ❤️
                </h1>

                <p className="text-gray-500 mt-2">
                    Our plans are officially set ✨
                </p>
            </div>

            {/* Date */}
            <div className="mt-8 bg-rose-200/80 rounded-2xl p-5 text-center shadow-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                    Date
                </p>

                <p className="text-2xl font-semibold text-gray-800 mt-2">
                    {formattedDate}
                </p>
            </div>

            {/* Details */}
            <div className="mt-4 grid grid-cols-2 gap-4">

                <div className="bg-white/80 rounded-2xl p-4 text-center shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                        Time
                    </p>

                    <p className="font-semibold text-gray-800 mt-2">
                        {formattedTime}
                    </p>
                </div>

                <div className="bg-white/80 rounded-2xl p-4 text-center shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                        Place
                    </p>

                    <p className="font-semibold text-gray-800 mt-2 break-words">
                        {place}
                    </p>
                </div>

            </div>

            {/* Plan */}
            <div className="mt-4 bg-white/80 rounded-2xl p-5 text-center shadow-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                    Your Plan
                </p>

                <p className="text-xl font-semibold text-gray-800 mt-2">
                    {activity}
                </p>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
                <p className="text-lg font-medium text-rose-500">
                    Can't wait to see you! 🥹❤️
                </p>

                <div className="mt-4 text-2xl tracking-widest text-red-500">
                    ♥ ♥ ♥
                </div>
            </div>
        </div>
    )
}

export default DateCard

