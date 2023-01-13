import { createAction, props } from "@ngrx/store";
import { Book } from "../models/classes/book";
import { BookActionTypes } from "../models/enums/bookActions";
import { IBook } from "../models/interfaces/book";

export const getBooks = createAction(BookActionTypes.GetBooks);
export const getBooksSuccess = createAction(BookActionTypes.GetBooksSuccess, props<{ payload: Book[] }>());
export const getBooksError = createAction(BookActionTypes.GetBooksError, props<{ payload: any }>());

export const addBook = createAction(BookActionTypes.AddBook, props<{ payload: Book }>());
export const addBookSuccess = createAction(BookActionTypes.AddBookSuccess, props<{ payload: IBook }>());
export const addBookError = createAction(BookActionTypes.AddBookError, props<{ payload: any }>());

export const updateBook = createAction(BookActionTypes.UpdateBook, props<{ payload: any, id: number }>());
export const updateBookSuccess = createAction(BookActionTypes.UpdateBookSuccess, props<{ payload: IBook }>());
export const updateBookError = createAction(BookActionTypes.UpdateBookError, props<{ payload: any }>());

export const deleteBook = createAction(BookActionTypes.DeleteBook, props<{ payload: number }>());
export const deleteBookSuccess = createAction(BookActionTypes.DeleteBookSuccess, props<{ payload: number }>());
export const deleteBookError = createAction(BookActionTypes.DeleteBookError, props<{ payload: any }>());

