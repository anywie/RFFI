import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public clientForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get form() { return this.clientForm.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.clientForm.invalid) {
      return;
    }
    // sendEmail(JSON.stringify(this.clientForm.value, null, 4));

    // display form values on success
    // alert('SUCCESS!!\n\n' + JSON.stringify(this.clientForm.value, null, 4));
  }
}
