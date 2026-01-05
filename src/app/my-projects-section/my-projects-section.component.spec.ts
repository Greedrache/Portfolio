import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsSectionComponent } from './my-projects-section.component';

describe('MyProjectsSectionComponent', () => {
  let component: MyProjectsSectionComponent;
  let fixture: ComponentFixture<MyProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjectsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
