import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-menu',
  templateUrl: './featured-menu.component.html',
  styleUrls: ['./featured-menu.component.css']
})
export class FeaturedMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() featuredMenu: any;

}
