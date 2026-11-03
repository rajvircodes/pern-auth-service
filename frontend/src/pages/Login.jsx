import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setIsSubmitting(true)

        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth'}/login`,
                { email, password },
                { withCredentials: true },
            )
            navigate('/')
        } catch (requestError) {
            setError(
                requestError.response?.data?.message ||
                    'Unable to sign in. Please check your connection and try again.',
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-sky-50 px-6 py-12">
            <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
                <div className="mb-8 text-center">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                            <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                            <path d="M9 12h6m-3-3v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                        </svg>
                    </span>
                    <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">Welcome back</h1>
                    <p className="mt-2 text-sm text-slate-500">Sign in to continue to your account.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        />
                    </div>

                    {error && (
                        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? 'Signing in…' : 'Sign in'}
                    </button>
                </form>

                <p className="mt-7 text-center text-sm text-slate-600">
                    Don&apos;t have an account?{' '}
                    <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-700">
                        Create one
                    </Link>
                </p>
            </section>
        </main>
    )
}

export default Login