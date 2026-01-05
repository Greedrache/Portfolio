import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeSectionComponent } from './why-me-section.component';

describe('WhyMeSectionComponent', () => {
  let component: WhyMeSectionComponent;
  let fixture: ComponentFixture<WhyMeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
