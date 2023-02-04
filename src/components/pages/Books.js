import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from '../BookItem';
import AddBook from '../AddBook';
import { loadBooksAction } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksAction());
  }, [dispatch]);

  return (
    <section>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
      <AddBook />
    </section>
  );
};

export default Books;
