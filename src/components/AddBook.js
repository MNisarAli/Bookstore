import React from 'react';

const AddBook = () => (
  <form className="p-2">
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="Book author" />
    <button type="submit">Add Book</button>
  </form>
);

export default AddBook;
