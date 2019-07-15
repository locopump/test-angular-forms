import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'taf-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Lifetime',
    notes: 'This is a little note for fill the blank spaces.'
  };

  singleModel = 'On';
  startDate: Date;
  startTime: Date;
  userRating = 0;
  maxRating = 10;

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  // subscriptionTypes = ['Monthly', 'Annual', 'Lifetime'];
  subscriptionTypes: Observable<string[]>;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataservice.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataservice.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => this.onHttpError(error)
    );
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onFocus(field: NgModel) {
    console.log('in onFocus: ', field.touched);
  }

}
