export interface Weather {
    current?: CurrentWeather;
    hourly?: HourlyWeather;
}

interface CurrentWeather {
    dt: Date;
    sunrise: Date;
    sunset: Date;
    temp: number;
    feels_like: number;
    wind_speed: number;
    wind_deg: number;
    weather: Array<WeatherInfo>;
}

interface HourlyWeather {
    dt: Date;
    temp: number;
    feels_like: number;
    wind_speed: number;
    wind_deg: number;
    weather: Array<WeatherInfo>;
}

interface WeatherInfo {
    id: number;
    main: string;
    description: string;
    icon: string;
}
