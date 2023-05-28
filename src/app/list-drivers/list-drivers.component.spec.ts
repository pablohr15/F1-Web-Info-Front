import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDriversComponent } from './list-drivers.component';

describe('ListDriversComponent', () => {
  let component: ListDriversComponent;
  let fixture: ComponentFixture<ListDriversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDriversComponent]
    });
    fixture = TestBed.createComponent(ListDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
