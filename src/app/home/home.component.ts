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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus. Volutpat maecenas volutpat blandit aliquam etiam erat. Proin fermentum leo vel orci. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ut porttitor leo a diam sollicitudin. Aliquam ut porttitor leo a diam sollicitudin tempor id. Morbi tincidunt ornare massa eget egestas. Elit at imperdiet dui accumsan. Venenatis cras sed felis eget velit aliquet sagittis. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis.",
      image: "../../assets/images/homepage_2.jpg"
    },
    {
      alignment: "right",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus. Volutpat maecenas volutpat blandit aliquam etiam erat. Proin fermentum leo vel orci. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ut porttitor leo a diam sollicitudin. Aliquam ut porttitor leo a diam sollicitudin tempor id. Morbi tincidunt ornare massa eget egestas. Elit at imperdiet dui accumsan. Venenatis cras sed felis eget velit aliquet sagittis. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis.",
      image: "../../assets/images/homepage_1.jpg"
    },
    {
      alignment: "left",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus. Volutpat maecenas volutpat blandit aliquam etiam erat. Proin fermentum leo vel orci. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ut porttitor leo a diam sollicitudin. Aliquam ut porttitor leo a diam sollicitudin tempor id. Morbi tincidunt ornare massa eget egestas. Elit at imperdiet dui accumsan. Venenatis cras sed felis eget velit aliquet sagittis. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis.",
      image: "../../assets/images/homepage_3.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
