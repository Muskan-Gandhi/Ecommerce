import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWomensComponent } from './category-womens.component';

describe('CategoryWomensComponent', () => {
  let component: CategoryWomensComponent;
  let fixture: ComponentFixture<CategoryWomensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWomensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
