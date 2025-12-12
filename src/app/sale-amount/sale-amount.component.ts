import { NgxCurrencyConfig } from './../../../node_modules/ngx-currency/lib/ngx-currency.config.d';
import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from "ngx-currency";
@Component({
  selector: 'app-sale-amount',
  standalone: true,
  imports: [ FormsModule,
      NgClass,
      CommonModule,
      NgxCurrencyDirective,
    ],
  templateUrl: './sale-amount.component.html',
  styleUrl: './sale-amount.component.css'
})
export class SaleAmountComponent {
saleAmount: number = 0;

  @Output() changeVat = new EventEmitter<number>();
  onShow() {

    this.changeVat.emit(this.saleAmount);
    console.log(this.saleAmount);
  }
  Currency = {
  prefix: '',     
  suffix: 'THB', 
  thousands: ',',
  decimal: '.',
  align: 'right',
  precision: 2
};
OnFocus() {
  this.Currency ={
    prefix: '',
    suffix: 'THB',
    thousands: '',
    decimal: '.',
    align: 'right',
    precision: 2
  }
}
OnBlur() {
  this.Currency ={
    prefix: '',
    suffix: 'THB',
    thousands: ',',
    decimal: '.',
    align: 'right',
    precision: 2
  }
}

}
