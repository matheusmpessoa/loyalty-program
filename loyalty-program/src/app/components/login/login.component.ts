import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submittedForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    return this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    })
  }

  public onSubmitLoginForm() {
    this.submittedForm = true;

    console.log(this.loginForm);
  }

  get f(): any { return this.loginForm.controls; }

}
