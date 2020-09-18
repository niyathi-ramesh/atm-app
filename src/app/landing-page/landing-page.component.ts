import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  atmForm: any;
  distAmount: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.atmForm = this.fb.group({
      amount: ['', Validators.required],
    });
  }

  onSubmit() {
    let amount = this.atmForm.value.amount;
    const currencyList = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    this.distAmount = [];

    for (let i = 0; i < currencyList.length && amount > 0; i++) {
      if (amount >= currencyList[i]) {
        this.distAmount.push({
          freq: Math.floor(amount / currencyList[i]),
          currency: currencyList[i],
        });
        amount = amount % currencyList[i];
      }
    }

    console.log(this.distAmount);
  }
}
