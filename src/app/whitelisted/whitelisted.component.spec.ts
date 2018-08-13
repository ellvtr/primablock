import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistedComponent } from './whitelisted.component';

describe('WhitelistedComponent', () => {
  let component: WhitelistedComponent;
  let fixture: ComponentFixture<WhitelistedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitelistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
