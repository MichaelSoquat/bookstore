import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})


export class NavComponent implements OnInit {

  @Input() sidenavStatus$: Observable<boolean> = new Observable<boolean>();
  @ViewChild('sidenav') matSidenav!: MatSidenav;
  isSidenavOpen: boolean = false;

  users: User[] = [
    { name: 'Natalie', color: 'green' },
    { name: 'Samira', color: 'blue' },
    { name: 'Amina', color: 'pink' },
  ]

  constructor() { }

  ngOnInit(): void {
    this.getNavEvent();
  }

  getNavEvent() {
    this.sidenavStatus$.subscribe((status: boolean) => {
      this.toggleSidenav();
      this.setSidenavStatus(status);
    })
  }

  toggleSidenav() {
    this.matSidenav.toggle();
  }

  setSidenavStatus(status: boolean) {
    this.isSidenavOpen = status;
  }
}
