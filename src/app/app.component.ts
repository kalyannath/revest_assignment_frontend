import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrossSellProductsComponent } from './components/cross-sell-products/cross-sell-products.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [HeaderComponent, FooterComponent, CrossSellProductsComponent, RouterModule]
})
export class AppComponent {}
