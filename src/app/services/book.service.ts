import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/classes/book';
import { IBook } from '../models/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://127.0.0.1:8000/api/allBooks/')
  }

  addBook(book: Partial<IBook>) {
    return this.http.post('http://127.0.0.1:8000/api/createBook/', book);
  }
}
