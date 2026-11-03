import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main className="min-h-[calc(100vh-73px)] overflow-hidden bg-slate-50">
            <section className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />
                <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-indigo-500" />
                            A simpler way to get started
                        </span>
                        <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Welcome to <span className="text-indigo-600">PERN Auth.</span>
                        </h1>
                        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                            Create an account, sign in, and get straight to what matters. Your next step is just a click away.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Create your account
                                <span aria-hidden="true" className="ml-2">→</span>
                            </Link>
                            <Link
                                to="/login"
                                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign in
                            </Link>
                        </div>
                        <p className="mt-5 text-sm text-slate-500">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-700">
                                Log in here
                            </Link>
                        </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-md">
                        <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-200/60 to-sky-200/60 blur-2xl" />
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">Your space</p>
                                    <p className="mt-1 text-lg font-semibold text-slate-900">A fresh start</p>
                                </div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                                        <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                                        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="space-y-4 py-6">
                                <div className="rounded-xl bg-slate-50 p-4">
                                    <p className="text-sm font-medium text-slate-900">Get started in moments</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-500">Register for an account or sign in to continue.</p>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                                            <path d="m5 10 3.2 3.2L15.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900">Simple and straightforward</p>
                                        <p className="mt-0.5 text-xs text-slate-500">A clear path to your account</p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to="/register"
                                className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="absolute -bottom-5 -left-7 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:flex">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">P</span>
                            <div>
                                <p className="text-xs font-semibold text-slate-900">Welcome aboard</p>
                                <p className="text-xs text-slate-500">Your journey starts here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200/70 bg-white">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
                    {[
                        ['01', 'Create an account', 'Set up your account in just a few steps.'],
                        ['02', 'Sign in securely', 'Come back and pick up where you left off.'],
                        ['03', 'Get going', 'Your account is ready whenever you are.'],
                    ].map(([number, title, description]) => (
                        <div key={number} className="flex gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-semibold text-indigo-600">
                                {number}
                            </span>
                            <div>
                                <h2 className="font-semibold text-slate-900">{title}</h2>
                                <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home