import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sidenavStatus: Subject<boolean> = new Subject<boolean>();
  isSidenavOpen: boolean = false;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      console.log(data);
    }
    );

  }

  checkSidenavStatus() {
    this.changeSidenavStatus();
    this.emitSidenavStatus(this.isSidenavOpen);
  }

  changeSidenavStatus() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  emitSidenavStatus(status: boolean) {
    this.sidenavStatus.next(status);
  }

}
