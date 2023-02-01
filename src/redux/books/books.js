const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBookAction = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});
