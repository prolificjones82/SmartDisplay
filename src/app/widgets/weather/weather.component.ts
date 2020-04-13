import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Settings } from 'src/app/interfaces/settings';
import { Weather } from 'src/app/interfaces/weather';
import { map, catchError } from 'rxjs/operators';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

    @Input() settings: Settings;

    private apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    private apiKey = 'f96c1a06daf301778aa2ff24ef54f969';

    public displayError = false;
    public errorMessage: string;
    public weather: Weather;

    constructor(
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.getWeatherData()
            .subscribe(
                (response) => {
                    this.weather = response;
                },
                (error) => {
                    this.displayError = true;
                    this.errorMessage = error.message;
                }
            );
    }

    getWeatherData(): Observable<Weather> {
        const apiUrl = this.buildUrl();
        return this.http.get(apiUrl).pipe(
            map((data: Weather) => {
                return data;
            }), catchError( error => {
                return throwError( 'Something went wrong!' );
            })
        );
    }

    getLocation(): Observable<any> {
        return new Observable(obs => {
            navigator.geolocation.getCurrentPosition(
                (success) => {
                    obs.next(success);
                    obs.complete();
                },
                (error) => {
                    obs.error(error);
                }
            );
       });
    }

    buildUrl(): string {
        return `${this.apiUrl}?lat=${this.settings.lat}&lon=${this.settings.lng}&units=metric&lang=en&appid=${this.apiKey}`;
    }
}
