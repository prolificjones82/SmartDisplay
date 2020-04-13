import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { Settings } from './interfaces/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public showSetup = false;
    public settings: Settings = {};

    constructor(
        protected settingsService: SettingsService
    ) {
        const settings = localStorage.getItem('userSettings');
        if (settings == null) {
            this.showSetup = true;
        } else {
            this.settings = JSON.parse(settings);
        }

        this.settingsService.settingState.subscribe(
            (response) => {
                this.showSetup = response;
                const savedSettings = localStorage.getItem('userSettings');
                this.settings = JSON.parse(savedSettings);
            }
        );
    }
}
