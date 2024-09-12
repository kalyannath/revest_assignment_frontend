import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatInputModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>My Store</span>
      <span class="spacer"></span>
      <input matInput placeholder="Search" />
      <button mat-icon-button>
        <mat-icon>shopping_cart</mat-icon>
      </button>
      <button mat-button>Home</button>
      <button mat-button>Products</button>
      <button mat-button>About</button>
      <button mat-button>Contact</button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class HeaderComponent {}
