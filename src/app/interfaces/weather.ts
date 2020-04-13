export interface Weather {
    current?: CurrentWeather;
    hourly?: Array<HourlyWeather>;
}

export interface CurrentWeather {
    dt: Date;
    sunrise: Date;
    sunset: Date;
    temp: number;
    feels_like: number;
    wind_speed: number;
    wind_deg: number;
    weather: Array<WeatherInfo>;
}

export interface HourlyWeather {
    dt: Date;
    temp: number;
    feels_like: number;
    wind_speed: number;
    wind_deg: number;
    weather: Array<WeatherInfo>;
}

export interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}
