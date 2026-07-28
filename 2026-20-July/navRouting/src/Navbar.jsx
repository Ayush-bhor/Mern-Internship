import { NavLink, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import './index.css';

function Home() {
    return (
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center px-4 py-10 sm:px-6 lg:px-8">
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                    React Router + Tailwind
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    A simple landing area for your routing demo.
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    This keeps the layout clean while still using a bit of Tailwind for spacing,
                    borders, and readable typography.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                        ['Simple routing', 'Move between pages with clear navigation.'],
                        ['Tailwind polish', 'Light spacing and subtle borders.'],
                        ['Responsive layout', 'Still works well on smaller screens.'],
                    ].map(([title, text]) => (
                        <div
                            key={title}
                            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                        >
                            <h3 className="text-base font-medium text-slate-900">{title}</h3>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Navbar() {
    return (
        <>
            <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-semibold tracking-wide text-slate-900 sm:text-2xl">
                        NavRouting
                    </h1>
                    <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                                        isActive
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                                        isActive
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                                        isActive
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                                        isActive
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Service />} />
            </Routes>
        </>
    );
}