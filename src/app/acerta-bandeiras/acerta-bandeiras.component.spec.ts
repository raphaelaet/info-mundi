import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcertaBandeirasComponent } from './acerta-bandeiras.component';

describe('AcertaBandeirasComponent', () => {
  let component: AcertaBandeirasComponent;
  let fixture: ComponentFixture<AcertaBandeirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcertaBandeirasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcertaBandeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
