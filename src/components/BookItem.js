import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const BookItem = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAction(id));
  };

  return (
    <article>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="submit" onClick={handleRemove}>Remove</button>
    </article>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
