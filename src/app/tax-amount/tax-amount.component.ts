import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter,OnInit, OnChanges } from '@angular/core';
import { NgxCurrencyDirective } from 'ngx-currency';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax-amount',
  standalone: true,
  imports: [CommonModule,NgxCurrencyDirective,FormsModule],
  templateUrl: './tax-amount.component.html',
  styleUrl: './tax-amount.component.css'
})
export class TaxAmountComponent implements OnChanges, OnInit {
  plusAmount: number = 0;
  deleteAmount: number = 0;
  taxAmount: number = 0;
  fixAmount: number | null = null;
  Currency = {
  prefix: '',      
  suffix: 'THB',
  thousands: ',',
  decimal: '.',
  align: 'right',
  precision: 2,  
  allowZero: false,
  nullable: true, 
};
  @Input() saleAmount: number = 0;
  @Output() changeTax = new EventEmitter<number>();
  
  ngOnInit() {
    this.fixAmount = this.taxAmount;
  }
  ngOnChanges() {
    if(this.saleAmount==null || this.saleAmount===0){

    }
    this.taxAmount = this.saleAmount*0.07;  
    this.changeTax.emit(this.taxAmount);
    this.plusAmount = Number((this.taxAmount).toFixed(2)) + 20;
    this.deleteAmount = Number((this.taxAmount).toFixed(2)) - 20;
    console.log("tax",this.taxAmount);
    console.log("plus",this.plusAmount);
    console.log("delete",this.deleteAmount);

  }
OnFocus() {
  console.log("FixAmount", this.fixAmount);
  console.log("saleAmount", this.saleAmount);
  console.log("taxAmount", this.taxAmount);

  console.log("plus",this.plusAmount);
  console.log("delete",this.deleteAmount);
  this.Currency ={
    prefix: '',
    suffix: 'THB',
    thousands: '',
    decimal: '.',
    align: 'right',
    precision: 2,
    allowZero: false,
    nullable: true,
  }
}
OnBlur() {

  this.Currency ={
    prefix: '',
    suffix: 'THB',
    thousands: ',',
    decimal: '.',
    align: 'right',
    precision: 2,
    allowZero: false,
    nullable: true,
  }
}
}
