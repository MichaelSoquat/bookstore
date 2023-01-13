import { createReducer, on } from "@ngrx/store";
import { IBook } from "../models/interfaces/book";
import { addBook, addBookSuccess, getBooks, getBooksError, getBooksSuccess, addBookError, deleteBook, deleteBookSuccess, deleteBookError } from "./books.actions";




export interface BooksState {
    books: IBook[];
    loading: boolean;
    bookAddedSuccess: boolean;
    bookDeletedSuccess: boolean;
}

export const initialState: BooksState = {
    books: [],
    loading: false,
    bookAddedSuccess: false,
    bookDeletedSuccess: false
};

export const booksReducer = createReducer(
    initialState,
    on(getBooks, (state) => ({ ...state, loading: true, bookAddedSuccess: false })),
    on(getBooksSuccess, (state, { payload }) => ({ ...state, books: payload, loading: false, bookAddedSuccess: false })),
    on(getBooksError, (state, { payload }) => ({ ...state, loading: false, bookAddedSuccess: false })),


);

export const addBookReducer = createReducer(
    initialState,
    on(addBook, (state) => ({ ...state, loading: true, bookAddedSuccess: false })),
    on(addBookSuccess, (state, { payload }) => ({ ...state, books: [...state.books, payload], loading: false, bookAddedSuccess: true })),
    on(addBookError, (state, { payload }) => ({ ...state, loading: false, bookAddedSuccess: false })),

    on(deleteBook, (state) => ({ ...state, loading: true, bookAddedSuccess: false })),

    on(deleteBookSuccess, (state, { payload }) => {
        const updatedState = {
            ...state,
            books: state.books.filter(book => book.id !== payload),
            loading: false,
            bookAddedSuccess: false,
            bookDeletedSuccess: true
        };
        return updatedState;
    }),
    on(deleteBookError, (state, { payload }) => ({ ...state, loading: false, bookAddedSuccess: false }))
);


