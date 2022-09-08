import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShowPlanetComponent } from './index-show-planet.component';

describe('IndexShowPlanetComponent', () => {
  let component: IndexShowPlanetComponent;
  let fixture: ComponentFixture<IndexShowPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShowPlanetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexShowPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
