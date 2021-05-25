import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submittedForm: boolean = false;
  users!: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
  ) {
    this.loginForm = this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    })
  }

  get f(): any { return this.loginForm.controls; }

  public onSubmitLoginForm() {
    this.submittedForm = true;
    if (this.loginForm.invalid) {
      return;
    }

  }

}
