import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule,
        NbLayoutModule,
        NbSidebarModule,
        NbButtonModule,
        NbCardModule,
        NbInputModule,
        NbFormFieldModule,
        NbListModule,
        NbSpinnerModule,
        NbToastrModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { AddressComponent } from './components/address/address.component';
import { ExchangeProductsComponent } from './components/exchange-products/exchange-products.component';
import { ListAddressComponent } from './components/list-address/list-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OrdersComponent,
    RegisterComponent,
    AddressComponent,
    ExchangeProductsComponent,
    ListAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbListModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
