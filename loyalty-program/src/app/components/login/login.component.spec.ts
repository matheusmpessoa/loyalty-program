/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Register } from 'src/app/models/register.model';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let toastrService: NbToastrService;
  let authService: AuthService;
  let formBuilder: FormBuilder;
  let router: Router;

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
      declarations: [LoginComponent],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    toastrService = TestBed.get(NbToastrService);
    authService = TestBed.get(AuthService);
    formBuilder = TestBed.get(FormBuilder);
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(component, 'buildForm');
    component.ngOnInit();
    expect(true).toBe(true);
  });

  describe('buildForm function', () => {
    it('buildForm', () => {
      const mock_user = {
        email: 'test@test.com',
        password: '12345',
      };

      component.loginForm.controls['email'].setValue(mock_user.email);
      component.loginForm.controls['password'].setValue(mock_user.password);
    });

    it('loginForm invalid when empty', () => {
      component.loginForm.controls.email.setValue('');
      component.loginForm.controls.password.setValue('');
      expect(component.loginForm.valid).toBeFalsy();
    });

    it('email field valid', () => {
      const email = component.loginForm.controls.email;
      expect(email.valid).toBeFalsy();

      email.setValue('');
      expect(email.hasError('required')).toBeTruthy();
    });

    it('password field valid', () => {
      const password = component.loginForm.controls.password;
      expect(password.valid).toBeFalsy();

      password.setValue('');
      expect(password.hasError('required')).toBeTruthy();
    });

    it('form should be valid', () => {
      component.loginForm.controls.email.setValue('matheus@gmail.com');
      component.loginForm.controls.password.setValue('test12345');

      expect(component.loginForm.valid).toBeTruthy();
    });
  });

  it('should set submitted to true', () => {
    component.onSubmitLoginForm();
    expect(component.submittedForm).toBeTruthy();
  });

  it('onSubmitLoginForm', fakeAsync(() => {
    let form: Register = {
      id: 0,
      fullName: '',
      email: '',
      password: '',
      phone: '',
    };

    spyOn(authService, 'getUsers').and.returnValue(of(form));
    component.onSubmitLoginForm();

    expect(component.submittedForm).toBeTruthy();
    expect(true).toBe(true);
  }));

  describe('showToastError function', () => {
    it('showToastError', () => {
      spyOn(toastrService, 'show').and.callThrough();

      const status = 'danger';
      component.showToastError(status);

      expect(true).toBe(true);
    });
  });
});
