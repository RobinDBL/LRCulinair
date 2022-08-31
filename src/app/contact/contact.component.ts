import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EmailService } from '../services/emailService.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private _emailService!: EmailService;
  private http!: HttpClient;
  private baseUrl: string;

  constructor(HttpClient: HttpClient) { 
    this.http = HttpClient;
    this._emailService = new EmailService(this.http);
    this.baseUrl = window.location.origin
   }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  telephoneNumberFormControl = new FormControl('', [Validators.required, Validators.minLength(9)]);

  messageFormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);

  matcher = new MyErrorStateMatcher();

  lat: number = 50.928849;
  lng: number = 3.217593;

  center: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng};
  zoom = 15;

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [ this.center ];

  sendEmail(): void {  
    this._emailService.sendEmail(this.nameFormControl.value, this.emailFormControl.value, this.telephoneNumberFormControl.value, this.messageFormControl.value);
    window.location.href = this.baseUrl;
  }
}
