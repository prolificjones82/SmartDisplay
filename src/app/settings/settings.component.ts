import { Component } from '@angular/core';
import { Settings } from '../interfaces/settings';
import { CountryPickerService, ICountry } from 'ngx-country-picker';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

    public userSettings: Settings = {};
    public countries: ICountry[] = [];

    constructor(
        protected countryPicker: CountryPickerService,
        protected http: HttpClient,
        protected settingsService: SettingsService
    ) {
        const currentSettings = localStorage.getItem('userSettings');
        if (currentSettings !== null) {
            const settings = JSON.parse(currentSettings);
            this.userSettings = settings;
        }

        this.countryPicker.getCountries().subscribe(
            (countries: ICountry[]) => {
                this.countries = countries;
                this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
            }
        );

    }

    setSettings(): void {
        const searchString = `${this.userSettings.town}%20${this.userSettings.city}%20${this.userSettings.country}`;
        const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + searchString + '.json?access_token=pk.eyJ1IjoibGltZWdyZWVudGFuZ2VyaW5lIiwiYSI6ImNrMjNnNzJmMTFzZDAzY212eWRuODkwNzUifQ.vEdzJ8f6kMB5sBW1Rpq11Q';

        this.http.get(mapboxUrl).subscribe(
            (response: any) => {
                response.features.forEach(feature => {
                    if (feature.matching_text === this.userSettings.town) {
                        this.userSettings.lat = feature.center[1];
                        this.userSettings.lng = feature.center[0];
                    }
                });

                localStorage.setItem('userSettings', JSON.stringify(this.userSettings));
            },
            (error) => {
                console.log(error);
                localStorage.setItem('userSettings', JSON.stringify(this.userSettings));
            },
            () => {
                this.settingsService.settingStateChange.next(false);
            }
        );

    }

}
