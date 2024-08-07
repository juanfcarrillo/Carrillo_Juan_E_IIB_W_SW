import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CalculatorComponent],
  template: '<app-calculator></app-calculator>'
})
export class AppComponent {
  title = 'angular-calculator';
}