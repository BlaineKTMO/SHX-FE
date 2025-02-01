import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserComponentComponent } from './browser-component.component';

describe('BrowserComponentComponent', () => {
  let component: BrowserComponentComponent;
  let fixture: ComponentFixture<BrowserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
