import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutedComponent } from './recruted.component';

describe('RecrutedComponent', () => {
  let component: RecrutedComponent;
  let fixture: ComponentFixture<RecrutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrutedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
