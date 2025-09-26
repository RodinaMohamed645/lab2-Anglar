import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './component/products/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Products,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab2');
}
