import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sidenavStatus: Subject<boolean> = new Subject<boolean>();
  isSidenavOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
