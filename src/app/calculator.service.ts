import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  httpEndpoint = 'http://localhost:3000/';

  async add(num1: number, num2: number): Promise<string | null | undefined> {
    const response = await fetch(this.httpEndpoint, {
      method: 'GET',
      headers: {
        'term1': num1.toString(),
        'term2': num2.toString()
      }
    })

    if (response.status !== 402) {
      throw new Error('Error al realizar la operación');
    }

    const result = response.headers.get('Response');

    return result;
  }

  async subtract(num1: number, num2: number): Promise<string | null | undefined> {
    const response = await fetch(this.httpEndpoint, {
      method: 'DELETE',
      headers: {
        'term1': num1.toString(),
        'term2': num2.toString()
      }
    })

    if (response.status !== 402) {
      throw new Error('Error al realizar la operación');
    }

    const result = await response.headers.get('Response');

    return result;
  }

  async multiply(num1: number, num2: number): Promise<string | null | undefined> {
    const response = await fetch(this.httpEndpoint, {
      method: 'POST',
      headers: {
        'term1': num1.toString(),
        'term2': num2.toString()
      }
    })

    if (response.status !== 402) {
      throw new Error('Error al realizar la operación');
    }

    const result = await response.headers.get('Response');

    return result;
  }

  async divide(num1: number, num2: number): Promise<string | null | undefined> {
    const response = await fetch(this.httpEndpoint, {
      method: 'PUT',
      headers: {
        'term1': num1.toString(),
        'term2': num2.toString()
      }
    })

    if (response.status !== 402) {
      throw new Error('Error al realizar la operación');
    }

    const result = await response.headers.get('Response');

    return result;
  }

  async power(num1: number, num2: number): Promise<string | null | undefined> {
    const response = await fetch(`${this.httpEndpoint}pow`, {
      method: 'GET',
      headers: {
        'term1': num1.toString(),
        'term2': num2.toString()
      }
    })

    if (response.status !== 402) {
      throw new Error('Error al realizar la operación');
    }

    const result = await response.headers.get('Response');

    return result;
  }

  async squareRoot(num: number): Promise<string | null | undefined> {
    const response = await fetch(this.httpEndpoint, {
      method: 'PATCH',
      headers: {
        'term1': num.toString()
      }
    })

    if (response.status !== 402) {
      throw new Error('Error al realizar la operación');
  }

    const result = await response.headers.get('Response');

    return result;
  } 
}