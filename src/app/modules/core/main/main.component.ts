
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Rating } from 'src/app/models/enums/rating';
import { Read } from 'src/app/models/enums/read';
import { IBook } from 'src/app/models/interfaces/book';
import * as BooksActions from '../../../state/books.actions';
import { Store } from '@ngrx/store';
import { selectBooksState } from 'src/app/state/books.selectors';
import { Observable, Subscription } from 'rxjs';
import { BooksState } from 'src/app/state/books.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  books!: IBook[];
  displayedColumns: string[] = ['id', 'title', 'author', 'genre', 'buyedAt', 'price', 'isRead', 'rating', 'notice', 'description', 'actions'];
  dataSource!: MatTableDataSource<IBook[]>;
  books$: Observable<BooksState | unknown> = this.store.select(selectBooksState);
  bookSubscription!: Subscription;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscribeToBooks();
    this.fetchBooks();
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  subscribeToBooks() {
    this.bookSubscription = this.books$.subscribe((books: any) => {
      if (books) {
        console.log(books)
        this.books = books.books;
        this.dataSource = new MatTableDataSource<any>(this.books);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  fetchBooks() {
    this.store.dispatch(BooksActions.getBooks());
  }

  addBook() {
    // add book --> new page with form
    this.books.push({ id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', buyedAt: '2021-01-01', price: 40, isRead: Read.no, rating: Rating.five, notice: 'Eine kurze Notiz', description: 'Eine kurze Beschreibung' });
    this.dataSource = new MatTableDataSource<any>(this.books);
    this.dataSource.paginator = this.paginator;
  }

  sortData(event: any) {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editBook(id: number) {
    // edit book --> edit page with form
  }

  deleteBook(id: number) {
    // delete book --> confirmation dialog
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
