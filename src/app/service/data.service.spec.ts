import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';

export class WeatherHttp {
  get(url: string) {
    return { subscribe:()=>{} };
  }
}

let weatherHttp: WeatherHttp;
let fixture: ComponentFixture<AppComponent>;

describe('app', () => {
  beforeEach(() => {
    weatherHttp = new WeatherHttp();
    spyOn(weatherHttp, 'get').and.returnValue({subscribe: () => {}});

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: HttpClient, useValue: weatherHttp}
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should expect http.get', () => {
    expect(weatherHttp.get).toHaveBeenCalled();
  });
});