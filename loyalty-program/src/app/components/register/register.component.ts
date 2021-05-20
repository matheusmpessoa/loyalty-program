import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.buildFormSignUp();
  }

  ngOnInit() {
  }

  private buildFormSignUp() {
    return this.formBuilder.group({
      user: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birth: ['', [Validators.required]],
    })
  }

  public onSubmitRegisterForm() {

  }

}
