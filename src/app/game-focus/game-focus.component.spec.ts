import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameFocusComponent } from './game-focus.component';

describe('GameFocusComponent', () => {
  let component: GameFocusComponent;
  let fixture: ComponentFixture<GameFocusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
