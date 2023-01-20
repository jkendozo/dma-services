import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutUsSectionComponent } from './about-us-section.component';

describe('AboutUsSectionComponent', () => {
  let component: AboutUsSectionComponent;
  let fixture: ComponentFixture<AboutUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all inputs', () => {
    component.title = 'test';
    component.description = 'test-description';
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLElement
    const description = fixture.debugElement.query(By.css('p')).nativeElement as HTMLElement
    expect(title.textContent).toBe('test');
    expect(description.textContent).toBe('test-description');
  });

  it('should set the correct image source', () => {
    component.aboutImage = 'image.jpg';
    fixture.detectChanges();

    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.getAttribute('src')).toBe('image.jpg');
  });
});
