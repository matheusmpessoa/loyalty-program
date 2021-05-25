import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Register } from '../../models/register.model';
import { MustMatch } from './../../helpers/must-match.validator';
import { v4 as uuidv4 } from 'uuid';
import { NbCardBodyComponent, NbComponentStatus, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public submittedForm: boolean = false;
  public users!: any;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: NbToastrService,
    private router: Router
  ) {
    this.registerForm = this.buildFormSignUp();
  }

  ngOnInit() {}

  private buildFormSignUp() {
    return this.formBuilder.group(
      {
        fullName: [ '',[Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
          ],
        ],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get f(): any {
    return this.registerForm.controls;
  }

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
    };

    this.authService.getUsers().subscribe((res) => {
      this.users = res;

      let findObject = this.users.find((o: any) => o.email === body.email);
      if (!findObject) {
        this.saveForm(body);
      } else {
        this.showToastError('danger');
      }
    });
  }

  public saveForm(body: any) {
    this.authService.registerUser(body).subscribe(
      (res) => {
        this.showToastSuccess('success');
      },
      (error) => {
        this.showToastError('danger');
      }
    );
  }

  public showToastSuccess(status: NbComponentStatus) {
    this.toastrService.show(status || 'Success', `Saved with success!`, { status });
  }

  public showToastError(status: NbComponentStatus) {
    this.toastrService.show(status || 'Success', `Error. Try with other e-mail!`, { status });
  }
}
