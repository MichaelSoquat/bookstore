
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBook } from 'src/app/models/interfaces/book';
import * as BooksActions from '../../../state/books.actions';
import { Store } from '@ngrx/store';
import { selectBooksState } from 'src/app/state/books.selectors';
import { Observable, Subscription } from 'rxjs';
import { BooksState } from 'src/app/state/books.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  books!: IBook[];
  displayedColumns: string[] = ['id', 'title', 'author', 'genre', 'buyedAt', 'buy_place', 'normal_price', 'payed', 'isRead', 'rating', 'notice', 'description',];
  dataSource!: MatTableDataSource<IBook[]>;
  books$: Observable<BooksState | unknown> = this.store.select(selectBooksState);
  bookSubscription!: Subscription;
  constructor(private store: Store, private _snackBar: MatSnackBar,) { }

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
    this.store.dispatch(BooksActions.deleteBook({ payload: id }));
    this._snackBar.open(`Buch mit der Nummer ${id} gelöscht`, 'Ok', {
      duration: 2000,
    });
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
