import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, Observable, of, switchMap } from "rxjs";
import { getBooks } from "./books.actions";
import * as BooksActions from './books.actions';
import { Read } from "../models/enums/read";
import { Rating } from "../models/enums/rating";
import { Book } from "../models/classes/book";
import { BookService } from "../services/book.service";


@Injectable()

export class BooksEffects {
    constructor(private actions$: Actions, private bookService:BookService) { }

    getBooks$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(getBooks), 
        switchMap(() => this.bookService.getBooks()),
        map((books: Book[]) => BooksActions.getBooksSuccess({ payload: books }))
    ));

    
}