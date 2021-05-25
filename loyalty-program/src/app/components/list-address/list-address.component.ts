import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from '../../models/address.model';

@Component({
  selector: 'list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit {
  public addresses!: any;

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit() {
    this.listOfAddresses();
  }

  public listOfAddresses() {
    this.addressService.getAdresses().subscribe(res => {
      this.addresses = res;
    });
  }

}
