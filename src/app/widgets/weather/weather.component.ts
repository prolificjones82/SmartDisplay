import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

    private apiUrl  : string = 'https://api.openweathermap.org/data/2.5/onecall';
    private apiKey  : string = 'f96c1a06daf301778aa2ff24ef54f969';
    private lat     : number = 0;
    private lng     : number = 0;

    public displayError : boolean = false;
    public weather      : any;

    constructor(
        private http: HttpClient
    ) {
        
    }

    ngOnInit(): void {
        if (navigator.geolocation) {
            this.getLocation().subscribe(
                (position) => {
                    this.lng = position.coords.longitude;
                    this.lat = position.coords.latitude;

                    const apiUrl = this.buildUrl();
                    this.http.get(apiUrl).subscribe(
                        (response) => {
                            console.log(response);
                            this.weather = response;
                        },
                        (error) => {
                            console.log(error);
                        }
                    )
                },
                (error) => {
                    this.displayError = true;
                }
            )
        } else {
            this.displayError = true;
        }
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
        return `${this.apiUrl}?lat=${this.lat}&lon=${this.lng}&units=metric&lang=en&appid=${this.apiKey}`;
    }
}
