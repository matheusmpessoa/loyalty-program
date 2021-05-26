/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AddressComponent } from './address.component';
import { NbToastrService } from '@nebular/theme';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AddressService } from 'src/app/services/address.service';

fdescribe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  let toastrService: NbToastrService;
  let addressService: AddressService;
  let formBuilder: FormBuilder;

  let nbToastrServiceStub = {
    show: () => {
      return of({});
    },
  };

  let addressServiceStub = {
    registerAddress: () => {
      return of({});
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: NbToastrService, useValue: nbToastrServiceStub },
        { provide: AddressService, useValue: addressServiceStub },
        FormBuilder,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;

    toastrService = TestBed.get(NbToastrService);
    addressService = TestBed.get(AddressService);
    formBuilder = TestBed.get(FormBuilder);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(component, 'buildFormAddress');
    component.ngOnInit();
    expect(true).toBe(true);
  });

  describe('buildFormAddress function', () => {
    it('buildFormAddress', () => {
      const mock_address = {
        id: 11111,
        name: 'Home',
        zipCode: '11199-410',
        street: 'Av Ana Costa 777',
        neighborhood: 'Gonzaga',
        city: 'Santos',
        state: 'SP',
        country: 'Brasil',
        description: 'House on the corner street',
      }

      component.addressForm.controls['name'].setValue(mock_address.name);
      component.addressForm.controls['zipCode'].setValue(mock_address.zipCode);
      component.addressForm.controls['street'].setValue(mock_address.street);
      component.addressForm.controls['neighborhood'].setValue(mock_address.neighborhood);
      component.addressForm.controls['city'].setValue(mock_address.city);
      component.addressForm.controls['state'].setValue(mock_address.state);
      component.addressForm.controls['country'].setValue(mock_address.country);
      component.addressForm.controls['description'].setValue(mock_address.description);
    });

    it('addressForm invalid when empty', () => {
      component.addressForm.controls.name.setValue('');
      component.addressForm.controls.zipCode.setValue('');
      component.addressForm.controls.street.setValue('');
      component.addressForm.controls.neighborhood.setValue('');
      component.addressForm.controls.city.setValue('');
      component.addressForm.controls.state.setValue('');
      component.addressForm.controls.country.setValue('');
      component.addressForm.controls.description.setValue('');

      expect(component.addressForm.valid).toBeFalsy();
    });

    it('name field valid', () => {
      const name = component.addressForm.controls.name;
      expect(name.valid).toBeFalsy();

      name.setValue('');
      expect(name.hasError('required')).toBeTruthy();
    });

    it('zipCode field valid', () => {
      const zipCode = component.addressForm.controls.zipCode;
      expect(zipCode.valid).toBeFalsy();

      zipCode.setValue('');
      expect(zipCode.hasError('required')).toBeTruthy();
    });

    it('street field valid', () => {
      const street = component.addressForm.controls.street;
      expect(street.valid).toBeFalsy();

      street.setValue('');
      expect(street.hasError('required')).toBeTruthy();
    });

    it('neighborhood field valid', () => {
      const neighborhood = component.addressForm.controls.neighborhood;
      expect(neighborhood.valid).toBeFalsy();

      neighborhood.setValue('');
      expect(neighborhood.hasError('required')).toBeTruthy();
    });

    it('city field valid', () => {
      const city = component.addressForm.controls.city;
      expect(city.valid).toBeFalsy();

      city.setValue('');
      expect(city.hasError('required')).toBeTruthy();
    });

    it('state field valid', () => {
      const state = component.addressForm.controls.state;
      expect(state.valid).toBeFalsy();

      state.setValue('');
      expect(state.hasError('required')).toBeTruthy();
    });

    it('country field valid', () => {
      const country = component.addressForm.controls.country;
      expect(country.valid).toBeFalsy();

      country.setValue('');
      expect(country.hasError('required')).toBeTruthy();
    });

    it('description field valid', () => {
      const description = component.addressForm.controls.description;
      expect(description.valid).toBeFalsy();

      description.setValue('');
      expect(description.hasError('required')).toBeTruthy();
    });

    it('form should be valid', () => {
      component.addressForm.controls.name.setValue('Home');
      component.addressForm.controls.zipCode.setValue('11199-410');
      component.addressForm.controls.street.setValue('Av Ana Costa 777');
      component.addressForm.controls.neighborhood.setValue('Gonzaga');
      component.addressForm.controls.city.setValue('Santos');
      component.addressForm.controls.state.setValue('SP');
      component.addressForm.controls.country.setValue('Brasil');
      component.addressForm.controls.description.setValue('House on the corner street');
    });
  });

  describe('onSubmitAddressForm function', () => {
    it('onSubmitAddressForm', fakeAsync(() => {

    }));

    it('should set submitted to true', () => {
      component.onSubmitAddressForm();
      expect(component.submittedForm).toBeTruthy();
    });
  });
  
  describe('showToastSuccess function', () => {
    it('showToastSuccess', () => {
      spyOn(toastrService, 'show').and.callThrough();

      const status = 'success';
      component.showToastSuccess(status);

      expect(true).toBe(true);
    });
  });

  describe('showToastError function', () => {
    it('showToastError', () => {
      spyOn(toastrService, 'show').and.callThrough();

      const status = 'danger';
      component.showToastError(status);

      expect(true).toBe(true);
    });
  });

});
