import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { SendMailService } from '../../services/send-mail.service';
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
  constructor(private fb: FormBuilder, private httpService: SendMailService) { }

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
    else {

      this.obj = JSON.parse(JSON.stringify(this.clientForm.value, null, 4));

      this.httpService.sendMail(this.obj).subscribe(
        error => console.log(error)
      );

      this.clientForm.reset();
    }
  }
}
