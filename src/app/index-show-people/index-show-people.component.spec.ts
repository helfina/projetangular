import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShowPeopleComponent } from './index-show-people.component';

describe('IndexShowPeopleComponent', () => {
  let component: IndexShowPeopleComponent;
  let fixture: ComponentFixture<IndexShowPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShowPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexShowPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
