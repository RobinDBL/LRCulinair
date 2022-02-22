import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsItems : Array<any> = [
    {
      alignment : "left",
      text: "Dit is een test",
    },
    {
      alignment: "right",
      text: "Dit is een tweede test",
    },
    {
      alignment: "left",
      text: "Dit is een derde test"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
