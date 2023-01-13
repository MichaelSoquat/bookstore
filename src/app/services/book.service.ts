import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../models/classes/book';
import { IBook } from '../models/interfaces/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  editFormValue!: IBook;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://127.0.0.1:8000/api/allBooks/').pipe(map(response => response as Book[]));
  }

  addBook(book: IBook): Observable<IBook> {
    return this.http.post<Object>('http://127.0.0.1:8000/api/createBook/', book, this.httpOptions).
      pipe(map(response => response as IBook));
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<Object>('http://127.0.0.1:8000/api/deleteBook/' + id, this.httpOptions);
  }

  editBook(payload: {id:number, book:IBook}): Observable<IBook> {
    return this.http.put<Object>('http://127.0.0.1:8000/api/updateBook/' + payload.id + "/", payload.book, this.httpOptions).
      pipe(map(response => response as IBook));
  }

  setEditFormValue(book: IBook) {
    this.editFormValue = book;
  }

  getEditFormValue(): IBook {
    return this.editFormValue;
  }
}
