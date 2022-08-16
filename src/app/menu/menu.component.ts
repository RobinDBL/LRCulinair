import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Input() menu: any;

  cardClick() {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '800px',
      width: '1200px',
      data: {
        menu: this.menu
      }
    });
    console.log(this.menu);
  }

}
