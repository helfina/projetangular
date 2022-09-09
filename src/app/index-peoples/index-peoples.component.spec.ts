import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPeoplesComponent } from './index-peoples.component';

describe('IndexPeoplesComponent', () => {
  let component: IndexPeoplesComponent;
  let fixture: ComponentFixture<IndexPeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPeoplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
