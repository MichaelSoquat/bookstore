import { createReducer, on } from "@ngrx/store";
import { IBook } from "../models/interfaces/book";
import { getBooks, getBooksError, getBooksSuccess } from "./books.actions";



export interface BooksState {
    books: IBook[];
    loading: boolean;
}

export const initialState: BooksState = {
    books: [],
    loading: false
};

export const booksReducer = createReducer(
    initialState,
    on(getBooks, (state) => ({ ...state, loading: true })),
    on(getBooksSuccess, (state, { payload }) => ({ ...state, books: payload, loading: false })),
    on(getBooksError, (state, { payload }) => ({ ...state, loading: false }))
);


