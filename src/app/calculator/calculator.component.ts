import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string | null | undefined = '';
  num1: number = 0;
  num2: number = 0;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private calculatorService: CalculatorService) {}

  async calculate(operation: string) {
    this.loading = true;
    this.errorMessage = '';
    try {
      switch (operation) {
        case 'add':
          this.result = await this.calculatorService.add(this.num1, this.num2);
          break;
        case 'subtract':
          this.result = await this.calculatorService.subtract(this.num1, this.num2);
          break;
        case 'multiply':
          this.result = await this.calculatorService.multiply(this.num1, this.num2);
          break;
        case 'divide':
          this.result = await this.calculatorService.divide(this.num1, this.num2);
          break;
        case 'power':
          this.result = await this.calculatorService.power(this.num1, this.num2);
          break;
        case 'squareRoot':
          this.result = await this.calculatorService.squareRoot(this.num1);
          break;
      }
      this.loading = false;
    } catch (error) {
      const err = error as Error;
      this.errorMessage = err.message;
    }
    finally {
      this.loading = false;
    }
  }
}