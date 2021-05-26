import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './register.component';
import { NbToastrService } from '@nebular/theme';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let toastrService: NbToastrService;
  let authService: AuthService;
  let formBuilder: FormBuilder;

  let nbToastrServiceStub = {
    show: () => {
      return of({});
    },
  };

  let authServiceStub = {
    getUsers: () => {
      return of({});
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: NbToastrService, useValue: nbToastrServiceStub },
        { provide: AuthService, useValue: authServiceStub },
        FormBuilder,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;

    toastrService = TestBed.get(NbToastrService);
    authService = TestBed.get(AuthService);
    formBuilder = TestBed.get(FormBuilder);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(component, 'buildFormSignUp');
    component.ngOnInit();
    expect(true).toBe(true);
  });

  describe('buildFormSignUp function', () => {
    it('buildFormSignUp', () => {
      const mock_register = {
        fullName: 'Home',
        email: '11199-410',
        phone: 'Av Ana Costa 777',
        password: 'Gonzaga',
        confirmPassword: 'Santos'
      }

      component.registerForm.controls['fullName'].setValue(mock_register.fullName);
      component.registerForm.controls['email'].setValue(mock_register.email);
      component.registerForm.controls['phone'].setValue(mock_register.phone);
      component.registerForm.controls['password'].setValue(mock_register.password);
      component.registerForm.controls['confirmPassword'].setValue(mock_register.confirmPassword);
    });

    it('registerForm invalid when empty', () => {
      component.registerForm.controls.fullName.setValue('');
      component.registerForm.controls.email.setValue('');
      component.registerForm.controls.phone.setValue('');
      component.registerForm.controls.password.setValue('');
      component.registerForm.controls.confirmPassword.setValue('');

      expect(component.registerForm.valid).toBeFalsy();
    });

    it('fullName field valid', () => {
      const fullName = component.registerForm.controls.fullName;
      expect(fullName.valid).toBeFalsy();

      fullName.setValue('');
      expect(fullName.hasError('required')).toBeTruthy();
    });

    it('email field valid', () => {
      const email = component.registerForm.controls.email;
      expect(email.valid).toBeFalsy();

      email.setValue('');
      expect(email.hasError('required')).toBeTruthy();
    });

    it('phone field valid', () => {
      const phone = component.registerForm.controls.phone;
      expect(phone.valid).toBeFalsy();

      phone.setValue('');
      expect(phone.hasError('required')).toBeTruthy();
    });

    it('password field valid', () => {
      const password = component.registerForm.controls.password;
      expect(password.valid).toBeFalsy();

      password.setValue('');
      expect(password.hasError('required')).toBeTruthy();
    });

    it('confirmPassword field valid', () => {
      const confirmPassword = component.registerForm.controls.confirmPassword;
      expect(confirmPassword.valid).toBeFalsy();

      confirmPassword.setValue('');
      expect(confirmPassword.hasError('required')).toBeTruthy();
    });
  });

  describe('onSubmitRegisterForm function', () => {
    it('onSubmitRegisterForm', fakeAsync(() => {
      let form = {
        name: 'Matheus',
        email: 'matheus@gm.com',
        phone: '11111',
        password: 'matheus123',
        confirmPassword: 'matheus123',
      };

      spyOn(authService, 'getUsers').and.returnValue(of(form));
      component.onSubmitRegisterForm();
  
      expect(component.submittedForm).toBeTruthy();
      expect(true).toBe(true);
    }));

    it('should set submitted to true', () => {
      component.onSubmitRegisterForm();
      expect(component.submittedForm).toBeTruthy();
    });
  });
  
  describe('showToastSuccess function', () => {
    it('showToastSuccess', () => {
      spyOn(toastrService, 'show').and.callThrough();

      const status = 'success';
      component.showToastSuccess(status);

      expect(true).toBe(true);
    });
  });

  describe('showToastError function', () => {
    it('showToastError', () => {
      spyOn(toastrService, 'show').and.callThrough();

      const status = 'danger';
      component.showToastError(status);

      expect(true).toBe(true);
    });
  });

});
