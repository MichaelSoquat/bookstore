import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      name: new FormControl(''),
      color: new FormControl('')
    });
  }

  onSubmit() {
  }
}
