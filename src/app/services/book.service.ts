import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../models/classes/book';
import { IBook } from '../models/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://127.0.0.1:8000/api/allBooks/')
  }

  addBook(book: IBook): Observable<IBook> {
    return this.http.post<Object>('http://127.0.0.1:8000/api/createBook/', book, this.httpOptions).
    pipe(map(response => response as IBook));
  }
}
