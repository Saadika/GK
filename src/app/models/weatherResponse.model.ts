export class WeatherResponse {
    weather: Array<Weather>;
    main: WeatherMain;
}

export class Weather {
    main: string;
    description: string;
}

export class WeatherMain {
    temp: number;
}