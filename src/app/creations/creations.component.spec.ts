import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreationsComponent } from './creations.component';

describe('CreationsComponent', () => {
  let component: CreationsComponent;
  let fixture: ComponentFixture<CreationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
