import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <NavLink to="/" className="text-lg font-semibold text-slate-900">
                    PERN Auth
                </NavLink>
                <div className="flex items-center gap-6">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'
                            }`
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            `rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 ${isActive ? 'ring-2 ring-indigo-300 ring-offset-2' : ''
                            }`
                        }
                    >
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar