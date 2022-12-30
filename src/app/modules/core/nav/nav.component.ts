import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  isNavOpen: boolean = false;
  users: User[] = [
    { name: 'Natalie', color: 'green' },
    { name: 'Samira', color: 'blue' },
    { name: 'Amina', color: 'pink' },
  ]

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('mouseover', (event) => {
      console.log(event.clientX)
      if (event.clientX <= 200) {
        this.isNavOpen = true;
      }
      else {
        this.isNavOpen = false;
      }
    });
  }
}
