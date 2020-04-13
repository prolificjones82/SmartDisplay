import { Component, OnInit, Input } from '@angular/core';
import { HourlyWeather } from 'src/app/interfaces/weather';

@Component({
    selector: 'app-rain-temp-graph',
    templateUrl: './rain-temp-graph.component.html',
    styleUrls: ['./rain-temp-graph.component.scss']
})
export class RainTempGraphComponent implements OnInit {

    @Input() weather: HourlyWeather;

    constructor() { }

    ngOnInit(): void {
        console.log(this.weather);
    }

}
