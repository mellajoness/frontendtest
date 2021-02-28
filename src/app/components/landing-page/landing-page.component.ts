import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable,of, from } from 'rxjs';
import { Store } from '@ngrx/store';
import { CardInput } from './../../models/card.model';
import { AppState } from './../../app.state';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
 cardDatas :Observable<CardInput[]>;
  constructor(
    private route: Router,
    private store: Store<AppState>
  ) { 
    this.cardDatas = store.select('card');
  }

  ngOnInit(): void {
  }

 
  gotoCard(){
    this.route.navigateByUrl('Authlogin')
  }

}
