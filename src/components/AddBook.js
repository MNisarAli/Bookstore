import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAction } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author } = book;
    if (title.trim() && author.trim()) {
      dispatch(addBookAction({
        item_id: uuidv4(), title, author, category: '',
      }));
      setBook({ title: '', author: '' });
    }
  };

  return (
    <section className="add-book">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="new-form" onSubmit={handleSubmit}>
        <input className="input title-input" type="text" placeholder="Book title" name="title" onChange={handleChange} value={book.title} />
        <input className="input author-input" type="text" placeholder="Book author" name="author" onChange={handleChange} value={book.author} />
        <button className="add-book-btn" type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
