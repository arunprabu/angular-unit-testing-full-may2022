import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set submitted to true`, () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it(`should call the onSubmit method`, () => {
    spyOn(component, 'onSubmit');
    const el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    // remove [disabled]="!contactForm.valid" from html and try
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it(`form should be invalid`, () => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['query'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it(`form should be valid`, () => {
    component.contactForm.controls['email'].setValue('a@b.com');
    component.contactForm.controls['name'].setValue('Arun');
    component.contactForm.controls['query'].setValue('I have a requirement');
    expect(component.contactForm.valid).toBeTruthy();
  });

  
});
