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

