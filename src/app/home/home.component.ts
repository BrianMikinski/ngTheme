import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: ''
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

}
