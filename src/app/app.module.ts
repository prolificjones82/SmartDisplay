import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { TimeComponent } from './widgets/time/time.component';
import { WeatherComponent } from './widgets/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TimeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
