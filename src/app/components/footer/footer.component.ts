import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <p>Email: mystore.com</p>
      <p>Phone: +123 456 789</p>
      <p>Address: 123 Main Street, Hyderabad, India</p>
    </mat-card>
  `,
  styles: [`
    mat-card {
      text-align: center;
      padding: 20px;
    }
  `]
})
export class FooterComponent {}
