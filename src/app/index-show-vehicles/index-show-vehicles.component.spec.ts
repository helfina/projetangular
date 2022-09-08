import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShowVehiclesComponent } from './index-show-vehicles.component';

describe('IndexShowVehiclesComponent', () => {
  let component: IndexShowVehiclesComponent;
  let fixture: ComponentFixture<IndexShowVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShowVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexShowVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
