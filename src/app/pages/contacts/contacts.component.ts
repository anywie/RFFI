import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import '../../../assets/js/smtp.js';
declare let Email: any;
// declare function Email(): void;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public clientForm: FormGroup;
  submitted = false;
  obj: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: [''],
      message: ['']
    });
  }

  get form(): any { return this.clientForm.controls; }

  onSubmit(): void {

    this.submitted = true;

    if (this.clientForm.invalid) {

      return;
    }

    this.obj = JSON.parse(JSON.stringify(this.clientForm.value, null, 4));
    console.log(this.obj.subject);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "noreply.rffi@gmail.com",
      Password: "AECFE9A76932C690512F98DEC3B8B9B05869",
      // To: "wierrdo@yandex.ru",
      To: "89619807475s@gmail.com",
      From: "noreply.rffi@gmail.com",
      Subject: this.obj.subject,
      Body: `<i>This is sent as a feedback from my resume page.</i> 
      <br/> <b>Name: </b>${this.obj.name} <br /> 
      <b>Email: </b>${this.obj.email}<br />
      <b>Subject: </b>${this.obj.subject}<br /> 
      <b>Message:</b> <br /> ${this.obj.message} <br><br> `
    });
    // .then(message => { alert(message); });

    // form.resetForm();

    // display form values on success
    // alert('SUCCESS!!\n\n' + JSON.stringify(this.clientForm.value, null, 4));
  }
}
