import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    showSetup   : boolean = false;

    constructor() {
        const settings = localStorage.getItem('settings');
        if (settings == null) {
            // this.showSetup = true;
        }
        console.log(this.showSetup);
    }
}
