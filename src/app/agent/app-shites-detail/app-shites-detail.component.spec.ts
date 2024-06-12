import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShitesDetailComponent } from './app-shites-detail.component';

describe('AppShitesDetailComponent', () => {
  let component: ShitesDetailComponent;
  let fixture: ComponentFixture<ShitesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShitesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShitesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
