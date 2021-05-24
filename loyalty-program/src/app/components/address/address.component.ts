import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../models/address.model';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  public addressForm: FormGroup;
  public submittedForm: boolean = false;
  public addresses!: Array<Address>;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.addressForm = this.buildFormAddress();
  }

  ngOnInit() {
    this.listOfAddresses();
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
  }

  get f(): any { return this.addressForm.controls; }

  public listOfAddresses() {
    this.addresses = [
      {
        id: 1,
        name: 'Home',
        zipCode: '11199-410',
        city: 'Santos',
        state: 'SP',
        street: 'Av Ana Costa 777',
        neighborhood: 'Gonzaga',
        country: 'Brasil',
        description: 'House on the corner street',
      },
      {
        id: 2,
        name: 'Work',
        zipCode: '11299-555',
        city: 'São Paulo',
        state: 'SP',
        street: 'Av Paulista 777',
        neighborhood: 'Centro',
        country: 'Brasil'
      },
      {
        id: 3,
        name: 'Gym',
        zipCode: '18199-674',
        city: 'São Paulo',
        state: 'SP',
        street: 'Av Ibirapuera 777',
        country: 'Brasil',
        description: 'The color of the building is blue',
      },
      {
        id: 4,
        name: 'Girlfriend',
        zipCode: '14434-289',
        city: 'Rio de Janeiro',
        state: 'RJ',
        street: 'Av Brasil 777',
        country: 'Brasil'
      }
    ];
  }

}
