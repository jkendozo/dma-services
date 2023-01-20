import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { takeLast } from 'rxjs';

import { WhatWeDoSectionComponent } from './what-we-do-section.component';

describe('WhatWeDoSectionComponent', () => {
  let component: WhatWeDoSectionComponent;
  let fixture: ComponentFixture<WhatWeDoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeDoSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all inputs', () => {
    component.title = 'test';
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLElement
    expect(title.textContent).toBe('test');
  });
});
