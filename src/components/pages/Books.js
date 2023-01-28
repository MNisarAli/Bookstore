import React from 'react';
import BookItem from '../BookItem';
import AddBook from '../AddBook';

const Books = () => (
  <div>
    <BookItem title="Book-1" author="Author-1" />
    <BookItem title="Book-2" author="Author-2" />

    <AddBook />
  </div>
);

export default Books;
