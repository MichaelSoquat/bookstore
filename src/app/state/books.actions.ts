import { createAction, props } from "@ngrx/store";
import { Book } from "../models/classes/book";
import { BookActionTypes } from "../models/enums/bookActions";

export const getBooks = createAction(BookActionTypes.GetBooks);
export const getBooksSuccess = createAction(BookActionTypes.GetBooksSuccess, props<{ payload: Book[] }>());
export const getBooksError = createAction(BookActionTypes.GetBooksError, props<{ payload: any }>());

