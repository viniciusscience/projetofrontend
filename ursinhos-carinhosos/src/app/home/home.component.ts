import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cpf: String = '';
  result = document.getElementById('result');
  constructor() {}

  ngOnInit(): void {}
  validar(): void {
    const valor = this.cpf;
    this.cpf = 'inválido';
  }
  private extractNumbers(s: string): string {
    return s ? s.replace(/\D)+/g, '') : '';
  }

  private mod11(digits: number[], multipliers: number[]): number {
    let i = 0;
    const rest = digits.reduce((p, e) => p + e * multipliers[i++], 0) % 11;
    return rest > 9 ? 0 : rest;
  }
  private  extractNumbersToList(value:String):number[] {
    let digits = Array<number>;
    for (item : extractNumbers(value).toCharArray()) {
        digits.push.parseInt(item);
    }
    return digits;
}

}
