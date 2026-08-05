import React, { useEffect, useState } from 'react'
import { getBooks, addBook, updateBook, deleteBook } from '../services/bookService'
import BookCard from '../components/BookCard'

export default function Books() {
  const [books, setBooks] = useState([])
  const [form, setForm] = useState({ bookName: '', bookAuther: '', bookPrice: '', publishDate: '', bookCoverUrl: '' })
  const [editId, setEditId] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    setLoading(true)
    try {
      const res = await getBooks()
      console.log('GET /getBook response:', res)
      setBooks(res.data.BookList || [])
    } catch (err) {
      console.error('Error fetching books', err)
      alert('Error fetching books: ' + (err.response?.data?.Message || err.message))
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editId) {
        const res = await updateBook({ ...form, _id: editId })
        console.log('PUT /updateBook response:', res)
        alert(res.data?.Message || 'Book updated')
        setEditId(null)
      } else {
        const res = await addBook(form)
        console.log('POST /addBook response:', res)
        alert(res.data?.Message || 'Book added')
      }
      setForm({ bookName: '', bookAuther: '', bookPrice: '', publishDate: '', bookCoverUrl: '' })
      await fetchBooks()
    } catch (err) {
      console.error('Error adding/updating book', err)
      alert('Error adding/updating book: ' + (err.response?.data?.Message || err.message))
    }
  }

  const handleEdit = (book) => {
    setEditId(book._id)
    setForm({ bookName: book.bookName, bookAuther: book.bookAuther, bookPrice: book.bookPrice, publishDate: book.publishDate, bookCoverUrl: book.bookCoverUrl || '' })
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this book?')) return
    try {
      const res = await deleteBook(id)
      console.log('DELETE /deleteBook response:', res)
      alert(res.data?.Message || 'Book deleted')
      await fetchBooks()
    } catch (err) {
      console.error('Error deleting book', err)
      alert('Error deleting book: ' + (err.response?.data?.Message || err.message))
    }
  }

  const addDemoBooks = () => {
    setBooks([
      { _id: '1', bookName: 'The Hobbit', bookAuther: 'J.R.R. Tolkien', bookPrice: '2500', publishDate: '1937-09-21', bookCoverUrl: 'https://images.unsplash.com/photo-1544937954-9caf057aa6c6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b1b5f2e5a8b6f4b8f2c7f6f6b6c1f2a' },
      { _id: '2', bookName: '1984', bookAuther: 'George Orwell', bookPrice: '1500', publishDate: '1949-06-08', bookCoverUrl: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b8a1e6f1f2c9d3b4a5c6d7e8f9a0b1c' },
      { _id: '3', bookName: 'Clean Code', bookAuther: 'Robert C. Martin', bookPrice: '1000', publishDate: '2008-08-01', bookCoverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7e3b6c4f2a1b9c8d7e6f5a4b3c2d1e0f' },
    ])
  }

  const formatCurrency = (v) => {
    const n = Number(v) || 0
    return n.toLocaleString('en-IN')
  }

  return (
    <div className="min-h-screen">
      <div className="container">

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-lg p-5">
            <h3 className="text-sm muted">Total Books</h3>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{books.length}</h1>
          </div>

          <div className="glass rounded-lg p-5">
            <h3 className="text-sm muted">Authors</h3>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{new Set(books.map(book => book.bookAuther)).size}</h1>
          </div>

          <div className="glass rounded-lg p-5">
            <h3 className="text-sm muted">Total Library Value</h3>
            <h1 className="text-2xl font-semibold text-gray-900 mt-2">₹{formatCurrency(books.reduce((total, book) => total + Number(book.bookPrice), 0))}</h1>
          </div>
        </div>

        <div className="glass rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">{editId ? 'Update Book' : 'Add New Book'}</h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input type="text" name="bookName" placeholder="Book Name" value={form.bookName} onChange={handleChange} className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-sky-300" />
            <input type="text" name="bookAuther" placeholder="Author Name" value={form.bookAuther} onChange={handleChange} className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="number" name="bookPrice" placeholder="Book Price" value={form.bookPrice} onChange={handleChange} className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="date" name="publishDate" value={form.publishDate} onChange={handleChange} className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="text" name="bookCoverUrl" placeholder="Cover image URL (optional)" value={form.bookCoverUrl} onChange={handleChange} className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-sky-300" />
            <button className="md:col-span-2 bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-md font-medium">{editId ? 'Update Book' : 'Add Book'}</button>
          </form>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Library Books</h2>
          <div>
            <button onClick={addDemoBooks} className="bg-gray-200 px-3 py-2 rounded">Add demo</button>
            <button onClick={fetchBooks} className="ml-2 bg-sky-600 text-white px-3 py-2 rounded">Refresh</button>
          </div>
        </div>

        {loading ? <div>Loading...</div> : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard key={book._id} book={book} onEdit={handleEdit} onDelete={handleDelete} formatCurrency={formatCurrency} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
