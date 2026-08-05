import { axiosInstance } from '../../axiosInstance';

export const getBooks = () => axiosInstance.get('/getBook');
export const addBook = (data) => axiosInstance.post('/addBook', data);
export const updateBook = (data) => axiosInstance.put('/updateBook', data);
export const deleteBook = (id) => axiosInstance.delete('/deleteBook', { data: { _id: id } });

export default { getBooks, addBook, updateBook, deleteBook };
