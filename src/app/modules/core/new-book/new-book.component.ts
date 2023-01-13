import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Book } from 'src/app/models/classes/book';
import { IBook } from 'src/app/models/interfaces/book';
import { Observable, Subscription, tap } from 'rxjs';
import { Read } from 'src/app/models/enums/read';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { BookActionTypes } from 'src/app/models/enums/bookActions';
import { BooksState } from 'src/app/state/books.reducer';
import { selectBooksState } from 'src/app/state/books.selectors';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  bookForm!: FormGroup;
  books$: Observable<BooksState | unknown> = this.store.select(selectBooksState);
  bookSubscription!: Subscription;

  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<Date>,
    private _snackBar: MatSnackBar, private store: Store) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: '',
      author: '',
      genre: '',
      buyed_at: '',
      description: '',
      notice: '',
      rating: '',
      is_read: '',
      buy_place: '',
      payed: '',
      normal_price: '',

    });
  }


  onSubmit() {
    const serializedBook = this.createNewBook().serializedBook;
    const sendableForm = this.changeReadAndDate(serializedBook);
    this.store.dispatch({ type: BookActionTypes.AddBook, payload: sendableForm });
    this.bookForm.reset();
    this._snackBar.open('Buch hinzugefügt', 'Ok', {
      duration: 2000,
    });
  }

  changeReadAndDate(serializedBook: IBook): IBook {
    if (!serializedBook.is_read) {
      serializedBook.is_read = Read.no;
    };
    const date = new Date(serializedBook.buyed_at);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateString = `${year}-${month}-${day}`;
    serializedBook.buyed_at = dateString;

    return serializedBook;
  }

  createNewBook(): Book {
    const newBook = new Book(this.bookForm.value);
    return newBook;
  }
}
