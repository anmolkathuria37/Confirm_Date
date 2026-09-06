
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from './Footer'

const ScheduleDate = () => {

    const navigate = useNavigate()

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [place, setPlace] = useState('')
    const [activity, setActivity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/date-confirmation', {
            state: {
                date,
                time,
                place,
                activity
            }
        })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">

            <h1 className="text-3xl font-bold mb-2">
                Okayyy... Let's Fix Our Date 🥰
            </h1>

            <p className="mb-8">
                You choose the details ❤️
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md flex flex-col gap-5"
            >

                <div>
                    <label className="block mb-2 font-semibold">
                        When are we meeting? 📅
                    </label>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border rounded-lg p-3 w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        What time? ⏰
                    </label>

                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="border rounded-lg p-3 w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        Where should we go? 📍
                    </label>

                    <input
                        type="text"
                        placeholder="Cafe, Restaurant, Park..."
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        className="border rounded-lg p-3 w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        What should we do? ✨
                    </label>

                    <select
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className="border rounded-lg p-3 w-full"
                        required
                    >
                        <option value="">
                            Choose something...
                        </option>

                        <option value="Coffee">
                            Coffee ☕
                        </option>

                        <option value="Dinner">
                            Dinner 🍝
                        </option>

                        <option value="Movie">
                            Movie 🎬
                        </option>

                        <option value="Long Walk">
                            Long Walk 🌆
                        </option>

                        <option value="Surprise Me">
                            Surprise Me 😌
                        </option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="btn mt-3 cursor-pointer group relative overflow-hidden border border-amber-200 shadow-lg  shadow-rose-200/40 transition-all duration-300    hover:-translate-y-2  hover:border-amber-300 hover:shadow-xl active:scale-95 m-8 p-2 rounded-2xl hover:scale-110"
                >
                    Confirm Our Date ❤️
                </button>

            </form>
            <Footer/>

        </div>
    )
}

export default ScheduleDate

