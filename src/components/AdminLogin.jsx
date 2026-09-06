
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        setError("")
        setLoading(true)

        try {
            const response = await fetch(
                "https://confirm-date.onrender.com/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Login failed")
            }

            // JWT token save
            localStorage.setItem("adminToken", data.token)

            // Dashboard par bhej do
            navigate("/admin/dashboard")

        } catch (error) {
            console.error("Login error:", error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="w-full max-w-md border rounded-3xl p-8 shadow-xl">

                <div className="text-center mb-8">

                    <div className="text-5xl mb-4">
                        🔐
                    </div>

                    <h1 className="text-3xl font-bold">
                        Admin Login
                    </h1>

                    <p className="mt-2">
                        Welcome back ❤️
                    </p>

                </div>

                <form onSubmit={handleLogin}>

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            Username
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2"
                            required
                        />

                    </div>

                    <div className="mb-5">

                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2"
                            required
                        />

                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl py-3 font-semibold shadow-md transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login ❤️"}
                    </button>

                </form>

            </div>

        </div>
    )
}

export default AdminLogin

