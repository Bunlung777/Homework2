import { CommonModule,NgClass } from '@angular/common';
import { Component, Input, OnInit,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from 'ngx-currency';
@Component({
  selector: 'app-surcharge',
  standalone: true,
  imports: [CommonModule,FormsModule,NgxCurrencyDirective,
    NgClass],
  templateUrl: './surcharge.component.html',
  styleUrl: './surcharge.component.css'
})
export class SurchargeComponent implements OnChanges {
  @Input() surcharge: number = 0;
  @Output() surchargeValue = new EventEmitter<number>();
  

  ngOnChanges(changes: SimpleChanges): void {
    this.surchargeValue.emit(this.valueSurcharge());
  }

  valueSurcharge(){
    console.log(this.surcharge);
    return parseFloat((this.surcharge*0.1).toFixed(2));

  }
  Currency = {
  prefix: '',      
  thousands: ',',
  suffix: 'THB',
  decimal: '.',
  align: 'right',
  precision: 2
}
}
