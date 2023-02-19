import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitcherComponent } from './switcher.component';

describe('SwitcherComponent', () => {
  let component: SwitcherComponent;
  let fixture: ComponentFixture<SwitcherComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
