import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl: string;

constructor(private httpClient: HttpClient) { 
  this.baseUrl = window.location.origin
 }

async sendEmail(name: string, email: string, telephoneNumber: string, message: string): Promise<void> {
  let response: any = await this.httpClient.post<any>("https://mailsender.blueservices.be/mail", {                            
    "fromName": name,
    "fromEmail": email,  "xApiKey": "3cDNYQXBiZmJ3UUJ5WGs2b2VzZXczUlZZeGV0ZlZtVEFBZzdHcG1iOAo=","telephonenumber": telephoneNumber,  "message": message
  }).subscribe( { next: data => console.log(data), error: error => console.log(error.message)});
  console.log(response);
}
}
