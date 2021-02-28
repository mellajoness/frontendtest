import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,FormControlName } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginfailuremodalComponent } from '../modals/loginfailuremodal/loginfailuremodal.component';
import {EmptycredentialsmodalComponent} from '../modals/emptycredentialsmodal/emptycredentialsmodal.component';
import {MomentDateAdapter,  MAT_MOMENT_DATE_ADAPTER_OPTIONS,MAT_MOMENT_DATE_FORMATS,} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Store } from '@ngrx/store';
import { CardInput } from './../../../models/card.model';
import * as CardActions from './../../../actions/card.action'
import { AppState } from './../../../app.state';
import {Observable,of, from } from 'rxjs';
import * as _moment from 'moment';
import { NotificationService } from '../../../notification.service'
  
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;
import {MatDatepicker} from '@angular/material/datepicker';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.css'],
  providers: [
  
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],

})
export class AuthloginComponent implements OnInit {
  refCodeform: FormGroup;
  loading: boolean;

    constructor(
     private dialog:MatDialog,
     private route: Router,
     private _formBuilder: FormBuilder,
     private authSrvc: AuthserviceService,
     private notifyService : NotificationService,
     private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.refCodeform = new FormGroup({
      name: new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(6)]),
      cardNumber: new FormControl(null,[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      amount: new FormControl(null,[Validators.required, ]),
      date: new FormControl(null,[Validators.required, ]),
       securityCode: new FormControl(null,[Validators.required, ]),
    });
   
  }

 
  pay() {
    if(this.refCodeform.invalid){
      return;
    }
   
     this.store.dispatch(new CardActions.AddCard(this.refCodeform.value  ));
     this.route.navigateByUrl('/')
     this.notifyService.showSuccess("Successfull !!", "Successful paid your for your subscription")
    console.log(this.refCodeform.value)
  }

 

  date = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  nameError(){
    const myNameError=this.refCodeform.get('name');
    if(myNameError.touched && ! myNameError.valid){
      if(myNameError.errors.required){
        return 'Name is required'
      }

      if(myNameError.errors.minlength){
        return 'Name must be more than two characters'
      }
      if(myNameError.errors.maxlength){
        return 'Name must not be more than six characters'
      }
    } 
  }
  
  cardNumberError(){
    const cardNumberError=this.refCodeform.get('cardNumber');
    if(cardNumberError.touched && ! cardNumberError.valid){
      if(cardNumberError.errors.required){
        return 'card number is required'
      }

      if(cardNumberError.errors.minlength){
        return 'card Number must be up to ten numbers'
      } 
      if(cardNumberError.errors.maxlength){
        return 'card Number must not be more than ten numbers'
      }
    }
  }

  amountError(){
    const amountError=this.refCodeform.get('amount');
    if(amountError.touched && ! amountError.valid){
      if(amountError.errors.required){
        return 'amount number is required'
      }
 
    }
  }

  dateError(){
    const dateError=this.refCodeform.get('date');
    if(dateError.touched && ! dateError.valid){
      if(dateError.errors.required){
        return 'date  is required'
      }
 
  }
}
}