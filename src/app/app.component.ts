import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';

  numero1: number = 0;
  numero2: number = 0;
  total: number = 0;

  sumar(): void {
    this.total = this.numero1 + this.numero2;
  }

  restar(): void {
    this.total = this.numero1 - this.numero2;
  }
}
