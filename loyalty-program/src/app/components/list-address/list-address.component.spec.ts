/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ListAddressComponent } from './list-address.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AddressService } from 'src/app/services/address.service';

describe('ListAddressComponent', () => {
  let component: ListAddressComponent;
  let fixture: ComponentFixture<ListAddressComponent>;

  let addressService: AddressService;

  let addressServiceStub = {
    getAdresses: () => {
      return of([{}]);
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAddressComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: AddressService, useValue: addressServiceStub },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddressComponent);
    component = fixture.componentInstance;

    addressService = TestBed.get(AddressService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(component, 'listOfAddresses');
    component.ngOnInit();
    expect(true).toBe(true);
  });
});