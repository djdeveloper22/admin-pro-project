import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPagesFoundComponent } from './not-pages-found.component';

describe('NotPagesFoundComponent', () => {
  let component: NotPagesFoundComponent;
  let fixture: ComponentFixture<NotPagesFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotPagesFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotPagesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
