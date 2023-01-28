import React from 'react';
import propsType from 'prop-types';

const BookItem = (props) => {
  const { title, author } = props;
  return (
    <div className="p-2">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="submit">Delete</button>
    </div>
  );
};

BookItem.propTypes = {
  title: propsType.string.isRequired,
  author: propsType.string.isRequired,
};

export default BookItem;
