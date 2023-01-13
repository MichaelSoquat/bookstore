import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, Observable, of, switchMap } from "rxjs";
import { getBooks } from "./books.actions";
import * as BooksActions from './books.actions';
import { Book } from "../models/classes/book";
import { BookService } from "../services/book.service";
import { IBook } from "../models/interfaces/book";


@Injectable()

export class BooksEffects {
    constructor(private actions$: Actions, private bookService: BookService) { }

    getBooks$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(getBooks),
        switchMap(() => this.bookService.getBooks()),
        map((books: Book[]) => BooksActions.getBooksSuccess({ payload: books }))
    ));

    addBook$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(BooksActions.addBook),
        switchMap((action) => this.bookService.addBook(action.payload)),
        map((book: IBook) => BooksActions.addBookSuccess({ payload: book }))
    ));

    addBookSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(BooksActions.addBookSuccess),
        switchMap(() => this.bookService.getBooks()),
        map((books: Book[]) => BooksActions.getBooksSuccess({ payload: books }))
    ));

    deleteBook$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(BooksActions.deleteBook),
        switchMap((action) => this.bookService.deleteBook(action.payload)),
        map((id: number) => BooksActions.deleteBookSuccess({ payload: id }))
    ));

    deleteBookSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(BooksActions.deleteBookSuccess),
        switchMap(() => this.bookService.getBooks()),
        map((books: Book[]) => BooksActions.getBooksSuccess({ payload: books }))
    ));
}