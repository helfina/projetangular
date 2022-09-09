import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVehiclesComponent } from './index-vehicles.component';

describe('IndexVehiclesComponent', () => {
  let component: IndexVehiclesComponent;
  let fixture: ComponentFixture<IndexVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
