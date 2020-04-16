import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of (['Monthly', 'Annual', 'Lifetime']);
  }

  // postUserSettingsForm (userSettings: UserSettings) : Observable<UserSettings> {
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/I5ongCLrtVOxqpg9AzjU', userSettings);
    // return of(userSettings);
  }
}