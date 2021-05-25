import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  public addressForm: FormGroup;
  public submittedForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private toastrService: NbToastrService,
  ) {
    this.addressForm = this.buildFormAddress();
  }

  ngOnInit() {
  }

  private buildFormAddress() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      zipCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      street: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      neighborhood: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      country: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    });
  }

  public onSubmitAddressForm() {
    this.submittedForm = true;
    console.log(this.addressForm);

    this.addressService.registerAddress(this.addressForm.value).subscribe(
      (res) => {
        this.showToastSuccess('success');
      },(error) => {
        this.showToastError('danger');
      }
    );
  }

  get f(): any { return this.addressForm.controls; }

  public showToastSuccess(status: NbComponentStatus) {
    this.toastrService.show(status || 'Success', `Saved with success!`, { status });
  }

  public showToastError(status: NbComponentStatus) {
    this.toastrService.show(status || 'Success', `Error. Fill the form again`, { status });
  }

}
