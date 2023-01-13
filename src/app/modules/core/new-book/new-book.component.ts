import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/classes/book';
import { IBook } from 'src/app/models/interfaces/book';
import { Observable } from 'rxjs';
import { Read } from 'src/app/models/enums/read';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private dateAdapter: DateAdapter<Date>, private bookService: BookService,
    private _snackBar: MatSnackBar) { }

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
    console.log(this.bookForm.value);

    const newBook = this.createNewBook();
    const serializedBook = newBook.serializedBook;
    console.log(serializedBook);
    const sendableForm = this.changeReadAndDate(serializedBook);
    this.bookService.addBook(sendableForm).subscribe((book: IBook) => {
      console.log(book);
      this.bookForm.reset();
      this._snackBar.open('Buch erfolgreich hinzugefügt!', "Ok", {
        duration: 2000,
      });
    }
    );
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
    const newBook = new Book(
      1,
      this.bookForm.value.title,
      this.bookForm.value.author,
      this.bookForm.value.genre,
      this.bookForm.value.buyed_at.toString(),
      this.bookForm.value.is_read.toString(),
      this.bookForm.value.rating,
      this.bookForm.value.notice,
      this.bookForm.value.description,
      this.bookForm.value.buy_place,
      this.bookForm.value.payed,
      this.bookForm.value.normal_price,
    );

    return newBook;
  }
}
