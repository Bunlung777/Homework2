import { Component,Output,EventEmitter } from '@angular/core';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [NgxCurrencyDirective,],
  templateUrl: './penalty.component.html',
  styleUrl: './penalty.component.css'
})
export class PenaltyComponent {
  penalty: number = 0;
  @Output() penalTyValue = new EventEmitter<number>();
  
  ngOnInit() {
  this.penalTyValue.emit(this.penaltyValue());   
}

  penaltyValue(){
    return (this.penalty = 200)
  }
  Currency = {
  prefix: '',      
  suffix: 'THB',
  thousands: ',',
  decimal: '.',
  align: 'right',
  precision: 2
}
}
