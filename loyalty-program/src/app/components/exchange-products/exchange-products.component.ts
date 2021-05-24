import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'exchange-products',
  templateUrl: './exchange-products.component.html',
  styleUrls: ['./exchange-products.component.scss']
})
export class ExchangeProductsComponent implements OnInit {
  public listProducts!: Array<Products>;

  constructor() {}

  ngOnInit() {
    this.listOfExchangeProducts();
  }

  public listOfExchangeProducts() {
    this.listProducts = [
      {
        id: 1,
        title: 'Whopper',
        description: 'Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
        nameShop: 'Burger King',
        linkShop: 'https://www.bk.com/menu/picker-picker_5520',
        priceProduct: '$19.99',
        points: '40',
        imageURL: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/84743a96a55cb36ef603c512d5b97c9141c40a33-1333x1333.png?w=750&q=40&fit=max&auto=format'
      },
      {
        id: 2,
        title: 'Decaf Pike Place® Roast',
        description: 'A smooth, well-rounded blend of Latin American coffees with subtly rich flavors of chocolate and toasted nuts.',
        nameShop: 'Starbucks',
        linkShop: 'https://www.starbucks.com/menu/product/481/hot?parent=%2Fdrinks%2Fhot-coffees%2Fbrewed-coffees',
        priceProduct: '$14.00',
        points: '28',
        imageURL: 'https://globalassets.starbucks.com/assets/51bf549cd8e9434da941fec33b820d39.jpg?impolicy=1by1_wide_1242'
      },
      {
        id: 3,
        title: 'T-shirt Hurley',
        description: 'The Hurley Recycled Staple Short Sleeve is a soft and comfortable short sleeve that can be worn with anything. Features a crew neckline and an original design.',
        nameShop: 'Hurley',
        linkShop: 'https://www.hurley.com/collections/clearance-men/products/regrind-staple-short-sleeve-black',
        priceProduct: '$18',
        points: '40',
        imageURL: 'https://cdn.shopify.com/s/files/1/0277/3680/1419/products/cu1196_black_1_outlet_720x.jpg?v=1618434263'
      },
    ];
  }

}
