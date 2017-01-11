import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  myForm: FormGroup;
  myName: AbstractControl;

  constructor(fb: FormBuilder) {

    this.myForm = fb.group({
      "myName": ['', Validators.required]
    });

    this.myName = this.myForm.controls["myName"];

  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log("form", form);
  }

}
