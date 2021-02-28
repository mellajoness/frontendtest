import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginfailuremodal',
  templateUrl: './loginfailuremodal.component.html',
  styleUrls: ['./loginfailuremodal.component.css']
})
export class LoginfailuremodalComponent implements OnInit {
  Message: string;
  
  constructor(@Inject(MAT_DIALOG_DATA) 
              public data: any,
              private route: Router,
              private dialog:MatDialog,
              ) {}
     
  ngOnInit() {
   this.Message=this.data.responseMessage
    console.log('suceeesss modal',this.data)
  }


}
