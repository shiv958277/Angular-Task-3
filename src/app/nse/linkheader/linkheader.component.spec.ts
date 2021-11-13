import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkheaderComponent } from './linkheader.component';

describe('LinkheaderComponent', () => {
  let component: LinkheaderComponent;
  let fixture: ComponentFixture<LinkheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
