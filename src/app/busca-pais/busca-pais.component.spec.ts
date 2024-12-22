import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPaisComponent } from './busca-pais.component';

describe('BuscaPaisComponent', () => {
  let component: BuscaPaisComponent;
  let fixture: ComponentFixture<BuscaPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaPaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
