import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { FilingTypeComponent } from "../filing-type/filing-type.component";
import { MonthComponent } from "../month/month.component";
import { YearComponent } from "../year/year.component";
import { SaleAmountComponent } from "../sale-amount/sale-amount.component";
import { TaxAmountComponent } from "../tax-amount/tax-amount.component";
import { SurchargeComponent } from "../surcharge/surcharge.component";
import { TotalAmountComponent } from "../total-amount/total-amount.component";
import { PenaltyComponent } from "../penalty/penalty.component";
import { ConfirmAndReviewComponent } from "../confirm-and-review/confirm-and-review.component";
import { TaxData } from '../models/taxdata.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    CommonModule,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    TotalAmountComponent,
    PenaltyComponent,
    ConfirmAndReviewComponent
],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
filingType: string = '0';  
month : string = '';
year : string = '';
surcharge: number = 0;
penalty: number = 0;
saleAmount: number = 0;
currentMonth = new Date().getMonth() + 1;  
totalSurcharge: number = 0;
taxAmount: number = 0;
Next:string='0';
onFilingTypeChange(newValue: string) {
  console.log("type", newValue);
    this.filingType = newValue;
    if (newValue === '1') {
      this.surcharge = 0;
      this.penalty = 0;
    }else{

      this.penalty = 200;
    }
  }
  onNext(newValue: string) {
    this.Next = newValue;
  }
onChangeVat(newSaleAmount: number) {
  this.saleAmount = newSaleAmount;
}
onChangeSutcharge(newSurcharge: number) {
  this.surcharge = newSurcharge;
}
onChangeSutcharge2(newSurcharge: number) {
  this.surcharge = newSurcharge;
}
OnChangePenalty(newPenalty: number) {
  this.penalty = newPenalty;
}
TotalSurcharge(newSurcharge: number) {
  this.totalSurcharge = newSurcharge;
}
Tax(newTax: number) {
  this.taxAmount = newTax;
}
Month(newMonth: string) {
  this.month = newMonth;
}
Year(newYear: string) {
  this.year = newYear;  
}
get taxData(): TaxData {
  return {
    filingType: this.filingType,
    month: this.month,
    year: this.year,
    saleAmount: parseFloat(this.saleAmount.toFixed(2)),
    taxAmount: this.taxAmount,
    surcharge: this.surcharge,  
    penalty: this.penalty,
    totalAmount: parseFloat((this.taxAmount + this.surcharge + this.penalty).toFixed(2))
  };
}


}