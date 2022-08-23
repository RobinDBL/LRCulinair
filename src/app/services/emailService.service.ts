import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

constructor(private httpClient: HttpClient) { }

sendEmailToOwner(name: string, email: string, telephoneNumber: string, message: string): void {
  let sendMessage: string = message + "\n\n Dit is een automatisch gegenereerd bericht. Gelieve te reageren naar: " + email + "\n Hier de gegevens van de klant: \n" + "naam: " + name + "\n email: " + email +  "\n Telefoonnummer: " + telephoneNumber;
  this.httpClient.post("http:///localhost:5001/mail", { "FromName": name, "FromEmail": email, "xApiKey": "api-key", "Message": sendMessage});
}
}
