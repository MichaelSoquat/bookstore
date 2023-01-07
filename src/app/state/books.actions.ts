import { createAction, props } from "@ngrx/store";
import { BookActionTypes } from "../models/enums/bookActions";

export const getBooks = createAction(BookActionTypes.GetBooks);
export const getBooksSuccess = createAction(BookActionTypes.GetBooksSuccess, props<{ payload: any }>());
export const getBooksError = createAction(BookActionTypes.GetBooksError, props<{ payload: any }>());

