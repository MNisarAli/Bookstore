import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../BookItem';
import AddBook from '../AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);

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
