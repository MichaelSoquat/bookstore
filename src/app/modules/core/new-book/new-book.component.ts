import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  bookForm: any;

  constructor(private fb:FormBuilder, private dateAdapter:DateAdapter<Date>) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: '',
      author: '',
      genre: '',
      price: '',
      buyed_at: '',
      description: '',
      notice: '',
      rating: '',
      is_read: '',
      
    });
  }

  onSubmit() {
    console.log('onSubmit()');
  }

    

  }
