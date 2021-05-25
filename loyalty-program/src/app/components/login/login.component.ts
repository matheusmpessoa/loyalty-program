import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submittedForm: boolean = false;
  public users!: any;
  public loading = false;
  public loggedUser!: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    })
  }

  get f(): any { return this.loginForm.controls; }

  public onSubmitLoginForm() {
    this.submittedForm = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.getUsers().subscribe((res) => {
      this.users = res;

      this.searchUsers();
    });
  }

  public searchUsers() {
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    this.loggedUser = this.users.reduce(function(a: any, b: any) {
      return (a.email == body.email && a) || (b.password == body.password && b)
    });

    if(!this.loggedUser) this.showToastError('danger');

    if(this.loggedUser) {
      this.loading = true;
      this.authService.setUser(this.loggedUser);

      setTimeout(() => {
        this.loading = false, 3000;
        this.router.navigate(['/exchange-products']);
      });
    };
  }

  public showToastError(status: NbComponentStatus) {
    this.toastrService.show(status || 'Success', `Error. Try with other e-mail!`, { status });
  }

}
