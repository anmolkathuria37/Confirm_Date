
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const navigate = useNavigate()

    const [dates, setDates] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const [editingDate, setEditingDate] = useState(null)

    const [editForm, setEditForm] = useState({ date: "", time: "", place: "", activity: "", })
    const [updating, setUpdating] = useState(false)



    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this date? 🥺"
        )

        if (!confirmDelete) {
            return
        }

        try {

            const token = localStorage.getItem("adminToken")

            const response = await fetch(
                `http://localhost:5000/api/dates/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            const data = await response.json()

            if (!response.ok) {

                if (
                    response.status === 401 ||
                    response.status === 403
                ) {
                    localStorage.removeItem("adminToken")
                    navigate("/admin")
                    return
                }

                throw new Error(
                    data.message || "Failed to delete date"
                )
            }

            // Dashboard ki list se deleted date hata do
            setDates((prevDates) =>
                prevDates.filter((item) => item._id !== id)
            )

        } catch (error) {

            console.error("Delete error:", error)

            setError(
                error.message || "Unable to delete date 😭"
            )
        }
    }


    const handleEdit = (item) => {

        setEditingDate(item)

        setEditForm({
            date: item.date,
            time: item.time,
            place: item.place,
            activity: item.activity,
        })
    }


    const handleUpdate = async (e) => {

        e.preventDefault()

        try {

            setUpdating(true)

            const token = localStorage.getItem("adminToken")

            const response = await fetch(
                `http://localhost:5000/api/dates/${editingDate._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(editForm),
                }
            )

            const data = await response.json()

            if (!response.ok) {

                if (
                    response.status === 401 ||
                    response.status === 403
                ) {
                    localStorage.removeItem("adminToken")
                    navigate("/admin")
                    return
                }

                throw new Error(
                    data.message || "Failed to update date"
                )
            }

            // Updated date ko UI mein replace karo
            setDates((prevDates) =>
                prevDates.map((item) =>
                    item._id === editingDate._id
                        ? data.data
                        : item
                )
            )

            // Modal close
            setEditingDate(null)

        } catch (error) {

            console.error("Update error:", error)

            setError(
                error.message || "Unable to update date 😭"
            )

        } finally {
            setUpdating(false)
        }
    }







    const fetchDates = async () => {
        try {

            const token = localStorage.getItem("adminToken")

            if (!token) {
                navigate("/admin")
                return
            }

            const response = await fetch(
                "http://localhost:5000/api/dates",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            const data = await response.json()

            if (!response.ok) {

                if (
                    response.status === 401 ||
                    response.status === 403
                ) {
                    localStorage.removeItem("adminToken")
                    navigate("/admin")
                    return
                }

                throw new Error(
                    data.message || "Failed to fetch dates"
                )
            }

            setDates(data.data)

        } catch (error) {

            console.error("Error fetching dates:", error)

            setError(
                error.message || "Unable to load dates 😭"
            )

        } finally {
            setLoading(false)
        }
    }






    useEffect(() => {
        fetchDates()
    }, [])


    return (
        <div className="min-h-screen px-6 py-10">

            {/* Header */}
            <div className="relative max-w-5xl mx-auto mb-10">

                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2">
                        💕 Date Dashboard
                    </h1>

                    <p>
                        All your confirmed dates in one place ❤️
                    </p>
                </div>

                {/* Logout */}
                <button
                    onClick={() => {
                        localStorage.removeItem("adminToken")
                        navigate("/admin")
                    }}
                    className="absolute right-0 top-0 border rounded-xl px-4 py-2 hover:scale-105 transition-all"
                >
                    Logout 🚪
                </button>

            </div>


            {/* Stats */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

                <div className="border rounded-2xl p-6 shadow-md text-center">
                    <h2 className="text-3xl font-bold">
                        {dates.length}
                    </h2>

                    <p className="mt-2">
                        Total Dates
                    </p>
                </div>


                <div className="border rounded-2xl p-6 shadow-md text-center">
                    <h2 className="text-3xl font-bold">
                        📅
                    </h2>

                    <p className="mt-2">
                        Scheduled
                    </p>
                </div>


                <div className="border rounded-2xl p-6 shadow-md text-center">
                    <h2 className="text-3xl font-bold">
                        ❤️
                    </h2>

                    <p className="mt-2">
                        Confirmed
                    </p>
                </div>

            </div>


            {/* Loading */}
            {loading && (
                <p className="text-center">
                    Loading dates... ❤️
                </p>
            )}


            {/* Error */}
            {error && (
                <p className="text-center text-red-500">
                    {error}
                </p>
            )}


            {/* Dates */}
            {!loading && !error && (

                <div className="max-w-5xl mx-auto">

                    {dates.length === 0 ? (

                        <div className="border rounded-2xl p-8 text-center">
                            <h2 className="text-xl font-semibold">
                                No dates scheduled yet 😭
                            </h2>

                            <p className="mt-2">
                                Your confirmed dates will appear here ❤️
                            </p>
                        </div>

                    ) : (

                        <div className="grid gap-5">

                            {dates.map((item) => (

                                <div
                                    key={item._id}
                                    className="border rounded-2xl p-6 shadow-md"
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <p>
                                            📅 <strong>Date:</strong>{" "}
                                            {new Date(item.date).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric"
                                                }
                                            )}
                                        </p>


                                        <p>
                                            ⏰ <strong>Time:</strong>{" "}
                                            {item.time}
                                        </p>


                                        <p>
                                            📍 <strong>Place:</strong>{" "}
                                            {item.place}
                                        </p>


                                        <p>
                                            ✨ <strong>Plan:</strong>{" "}
                                            {item.activity}
                                        </p>

                                    </div>

                                    <div className="flex justify-end gap-3 mt-5">

                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="border border-blue-300 text-blue-500 px-4 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-200"
                                        >
                                            ✏️ Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="border border-red-300 text-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-200"
                                        >
                                            🗑️ Delete
                                        </button>

                                    </div>



                                </div>

                            ))}

                        </div>

                    )}

                </div>

            )}

            {/* Edit Modal */}
            {editingDate && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">

                    <div className="w-full max-w-md bg-white rounded-3xl p-7 shadow-2xl">

                        <div className="flex items-center justify-between mb-6">

                            <h2 className="text-2xl font-bold">
                                ✏️ Edit Date
                            </h2>

                            <button
                                onClick={() => setEditingDate(null)}
                                className="text-xl hover:scale-110 transition-all"
                            >
                                ✕
                            </button>

                        </div>

                        <form onSubmit={handleUpdate}>

                            {/* Date */}
                            <div className="mb-4">

                                <label className="block mb-2 font-medium">
                                    📅 Date
                                </label>

                                <input
                                    type="date"
                                    value={editForm.date}
                                    onChange={(e) =>
                                        setEditForm({
                                            ...editForm,
                                            date: e.target.value,
                                        })
                                    }
                                    className="w-full border rounded-xl px-4 py-3 outline-none"
                                    required
                                />

                            </div>

                            {/* Time */}
                            <div className="mb-4">

                                <label className="block mb-2 font-medium">
                                    ⏰ Time
                                </label>

                                <input
                                    type="time"
                                    value={editForm.time}
                                    onChange={(e) =>
                                        setEditForm({
                                            ...editForm,
                                            time: e.target.value,
                                        })
                                    }
                                    className="w-full border rounded-xl px-4 py-3 outline-none"
                                    required
                                />

                            </div>

                            {/* Place */}
                            <div className="mb-4">

                                <label className="block mb-2 font-medium">
                                    📍 Place
                                </label>

                                <input
                                    type="text"
                                    value={editForm.place}
                                    onChange={(e) =>
                                        setEditForm({
                                            ...editForm,
                                            place: e.target.value,
                                        })
                                    }
                                    className="w-full border rounded-xl px-4 py-3 outline-none"
                                    placeholder="Enter place"
                                    required
                                />

                            </div>

                            {/* Activity */}
                            <div className="mb-6">

                                <label className="block mb-2 font-medium">
                                    ✨ Plan
                                </label>

                                <input
                                    type="text"
                                    value={editForm.activity}
                                    onChange={(e) =>
                                        setEditForm({
                                            ...editForm,
                                            activity: e.target.value,
                                        })
                                    }
                                    className="w-full border rounded-xl px-4 py-3 outline-none"
                                    placeholder="Enter plan"
                                    required
                                />

                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3">

                                <button
                                    type="button"
                                    onClick={() => setEditingDate(null)}
                                    className="flex-1 border rounded-xl py-3 hover:bg-gray-100 transition-all"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={updating}
                                    className="flex-1 rounded-xl py-3 font-semibold shadow-md hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                                >
                                    {updating ? "Saving..." : "Save Changes ❤️"}
                                </button>

                            </div>

                        </form>

                    </div>

                </div>
            )}
        </div>



    )


}

export default Admin

