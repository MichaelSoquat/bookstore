
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Rating } from 'src/app/models/enums/rating';
import { Read } from 'src/app/models/enums/read';
import { Book } from 'src/app/models/interfaces/book';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  books: Book[] = [
    { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', buyedAt: '2021-01-01', price: 20, isRead: Read.yes, rating: Rating.zero, notice: 'Eine kurze Notiz', description: 'Eine kurze Beschreibung' },
    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', buyedAt: '2021-01-01', price: 40, isRead: Read.no, rating: Rating.five, notice: 'Eine kurze Notiz', description: 'Eine kurze Beschreibung' },

  ]
  displayedColumns: string[] = ['id', 'title', 'author', 'genre', 'buyedAt', 'price', 'isRead', 'rating', 'notice', 'description'];
  dataSource = new MatTableDataSource<any>(this.books);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

}
