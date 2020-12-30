import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  price: number = 1050;
  taxRate: number = .001;
  salesTax: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  /**
  * format number values
  * @param value
  */
  formatThousands(value: number) {
    if (value >= 1000) {
      return "$" + `${Math.round(value / 1000)}k`;
    }

    return value;
  }

  /**
   * format percent values
   * @param value
   */
  formatPercent(value: number) {
    return Math.round(value * 100) + "%";
  }

}
