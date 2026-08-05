import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-semibold brand text-gray-900">Library Manager</h1>
            <div className="text-sm muted">Simple catalog</div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <Link to="/" className="text-sm text-gray-700 hover:underline">Home</Link>
          <Link to="/" className="bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 rounded-md text-sm">Books</Link>
        </nav>
      </div>
    </header>
  )
}
