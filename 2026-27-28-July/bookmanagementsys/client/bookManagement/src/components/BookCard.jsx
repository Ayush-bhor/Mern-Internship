import React from 'react'

export default function BookCard({ book, onEdit, onDelete, formatCurrency }) {
  const defaultImg = 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d'

  return (
    <div key={book._id} className="glass rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">

      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={book.bookCoverUrl || defaultImg}
          alt={book.bookName}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = defaultImg }}
        />
      </div>

      <div className="p-5 space-y-3 text-sm">

        <h3 className="text-lg font-semibold text-gray-900">{book.bookName}</h3>

        <p className="muted">
          <strong>Author :</strong> <span className="text-gray-700">{book.bookAuther}</span>
        </p>

        <p className="muted">
          <strong>Price :</strong> <span className="text-gray-700">₹{formatCurrency(book.bookPrice)}</span>
        </p>

        <p className="muted">
          <strong>Published :</strong> <span className="text-gray-700">{book.publishDate}</span>
        </p>

        <div className="flex gap-3 pt-3">

          <button onClick={() => onEdit(book)} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
            Edit
          </button>

          <button onClick={() => onDelete(book._id)} className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
            Delete
          </button>

        </div>

      </div>

    </div>
  )
}
