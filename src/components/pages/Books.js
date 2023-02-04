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
    <>
      <section className="books">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>
      <p className="section-divider" />
      <AddBook />
    </>
  );
};

export default Books;
