import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render all inputs', () => {
    component.title = 'test';
    component.description = 'test-description';
    component.buttonText = 'test-button-text'
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h1')).nativeElement as HTMLElement
    const description = fixture.debugElement.query(By.css('p')).nativeElement as HTMLElement
    const buttonText = fixture.debugElement.query(By.css('button')).nativeElement as HTMLElement
    expect(title.textContent).toBe('test');
    expect(description.textContent).toBe('test-description');
    expect(buttonText.textContent).toBe('test-button-text');
  });

  it('should set the background image using ngStyle', () => {
    component.bgImage = 'bgImageIllustrations.jpg';
    fixture.detectChanges();
    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.style.backgroundImage).toBe('url("bgImageIllustrations.jpg")');
  });

  it('should navigate to the correct URL when the button is clicked', () => {
    component.buttonLink = 'https://reedelsevier.sharepoint.com/sites/RX.Pilipinas/SitePages/Home.aspx';
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('a');
    buttonElement.click();
    expect(buttonElement.getAttribute('href')).toBe('https://reedelsevier.sharepoint.com/sites/RX.Pilipinas/SitePages/Home.aspx');
  });
});
