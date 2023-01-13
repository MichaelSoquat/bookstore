import { createReducer, on } from "@ngrx/store";
import { IBook } from "../models/interfaces/book";
import { addBook, addBookSuccess, getBooks, getBooksError, getBooksSuccess, addBookError } from "./books.actions";



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
    on(getBooksError, (state, { payload }) => ({ ...state, loading: false })),

    on(addBook, (state) => ({ ...state, loading: true })),
    on(addBookSuccess, (state, { payload }) => ({ ...state, books: [...state.books, payload], loading: false })),
    on(addBookError, (state, { payload }) => ({ ...state, loading: false })),
);



