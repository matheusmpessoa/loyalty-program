import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Register } from '../../models/register.model';
import { MustMatch } from './../../helpers/must-match.validator';
import { v4 as uuidv4 } from 'uuid';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    private toastrService: NbToastrService,
    private router: Router
  ) {
    this.registerForm = this.buildFormSignUp();
  }

  ngOnInit() {
  }

  private buildFormSignUp() {
    return this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f(): any { return this.registerForm.controls; }

  public onSubmitRegisterForm() {
    this.submittedForm = true;

    if (this.registerForm.invalid) {
      return;
    }

    const body = {
      id: uuidv4(),
      fullName: this.registerForm.value.fullName,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      password: this.registerForm.value.password,
    }

    this.authService.registerUser(body).subscribe(
      (res) => {
        console.log(res);
        this.showToast('top-right', 'success', 'Saved with Success');
        this.router.navigate(['/login']);
      },(error) => {
        console.log(error);
        this.showToast('top-right', 'danger', 'ERROR');
      }
    );
  }

  public showToast(position: any, status: any, message: string) {
    this.toastrService.show(message, { position, status });
  }

}
