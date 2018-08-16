import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditissueComponent } from './editissue.component';

describe('EditissueComponent', () => {
  let component: EditissueComponent;
  let fixture: ComponentFixture<EditissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
