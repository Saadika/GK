import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
   }));
   
  it(`should have as title 'MyWeatherApi'`, async(() => {
   const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
     expect(app).toEqual('MyWeatherApi');
   }));
 });
