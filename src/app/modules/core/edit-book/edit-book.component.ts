import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/classes/book';
import { BookActionTypes } from 'src/app/models/enums/bookActions';
import { Read } from 'src/app/models/enums/read';
import { IBook } from 'src/app/models/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(private fb: FormBuilder, private bookService: BookService, private store: Store,
    private router: Router, private _snackBar: MatSnackBar) { }

  bookForm!: FormGroup;
  formValue!: IBook;
  bookId: number = 0;


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
    this.formValue = this.bookService.getEditFormValue();
    this.setFormValue();
    if (this.formValue.id) {
      this.bookId = this.formValue.id;
    }
  }

  setFormValue() {
    this.bookForm.setValue({
      title: this.formValue.title,
      author: this.formValue.author,
      genre: this.formValue.genre,
      buyed_at: this.formValue.buyed_at,
      description: this.formValue.description,
      notice: this.formValue.notice,
      rating: this.formValue.rating,
      is_read: this.formValue.is_read,
      buy_place: this.formValue.buy_place,
      payed: this.formValue.payed,
      normal_price: this.formValue.normal_price,
    });
    this.bookForm.updateValueAndValidity();
  }
  onSubmit() {
    const serializedBook = this.createNewBook().serializedBook;
    const sendableForm = this.changeReadAndDate(serializedBook);
    console.log(sendableForm)
    this.store.dispatch({ type: BookActionTypes.UpdateBook, payload: { book: sendableForm, id: this.bookId } });

    this.bookForm.reset();
    this.router.navigate(['/']);
    this._snackBar.open('Änderungen gespeichert', 'Ok', {
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
