import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './../../helpers/must-match.validator';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public submittedForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.buildFormSignUp();
  }

  ngOnInit() {
  }

  private buildFormSignUp() {
    return this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  public onSubmitRegisterForm() {
    this.submittedForm = true;

    console.log(this.registerForm);
  }

  get f(): any { return this.registerForm.controls; }

}
