import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SKV9yPhHVa5Un0Zh5Bl5/';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const FETCH_BOOKS = 'FETCH_BOOKS';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return action.payload;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id.toString() !== action.payload.toString());
    default:
      return state;
  }
};

export default bookReducer;

export const loadBooksAction = createAsyncThunk(FETCH_BOOKS, async () => {
  const response = await axiosInstance.get('books');
  const books = Object.keys(response.data).map((id) => ({
    id,
    ...response.data[id][0],
  }));
  return books;
});

export const addBookAction = createAsyncThunk(ADD_BOOK, async (book) => {
  await axiosInstance.post('books', book);
  return book;
});

export const removeBookAction = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axiosInstance.delete(`books/${id}`);
  return id;
});
