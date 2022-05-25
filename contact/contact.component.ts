import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  pageName = 'Contact Us';

  contactForm!: FormGroup;
  contact = {
    name: '',
    email: '',
    query: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'query': new FormControl(this.contact.query, Validators.required)
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
