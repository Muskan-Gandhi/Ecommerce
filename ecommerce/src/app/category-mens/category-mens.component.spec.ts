import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMensComponent } from './category-mens.component';

describe('CategoryMensComponent', () => {
  let component: CategoryMensComponent;
  let fixture: ComponentFixture<CategoryMensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
