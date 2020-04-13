import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    public settingStateChange = new Subject<boolean>();
    public settingState = this.settingStateChange.asObservable();

}
