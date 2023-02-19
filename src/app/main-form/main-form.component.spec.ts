import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainFormComponent } from './main-form.component';

describe('MainFormComponent', () => {
  let component: MainFormComponent;
  let fixture: ComponentFixture<MainFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
