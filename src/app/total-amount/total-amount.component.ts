import { Component,Input } from '@angular/core';
import { NgxCurrencyDirective } from "ngx-currency";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [NgxCurrencyDirective,CommonModule,FormsModule],
  templateUrl: './total-amount.component.html',
  styleUrl: './total-amount.component.css'
})
export class TotalAmountComponent {
  @Input() totalSurcharge: number = 0;
  @Input() totalPenalty: number = 0;
  @Input() totalTax: number = 0;
  @Input() Moth: string = '';
  @Input() Year: string = '';
  totalAmount(){
    console.log("TatalSurcharge",this.totalSurcharge);
    return this.totalSurcharge + this.totalPenalty + this.totalTax;
  }
}
