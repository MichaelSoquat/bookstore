import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, Observable, of } from "rxjs";
import { getBooks } from "./books.actions";
import * as BooksActions from './books.actions';
import { Read } from "../models/enums/read";
import { Rating } from "../models/enums/rating";


@Injectable()

export class BooksEffects {
    constructor(private actions$: Actions) { }

    getBooks$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(getBooks),
        map(() => BooksActions.getBooksSuccess({
            payload: [
                { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', buyedAt: '2021-01-01', price: 20, isRead: Read.yes, rating: Rating.zero, notice: 'Eine kurze Notiz', description: 'Eine kurze Beschreibung' },
                { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', buyedAt: '2021-01-01', price: 40, isRead: Read.no, rating: Rating.five, notice: 'Eine kurze Notiz', description: 'Eine kurze Beschreibung' },
            ]
        }))
    ));
}