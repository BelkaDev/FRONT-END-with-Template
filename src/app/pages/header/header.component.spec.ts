import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header.component';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
