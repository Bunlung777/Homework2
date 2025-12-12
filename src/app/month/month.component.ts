import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-month',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './month.component.html',
  styleUrl: './month.component.css'
})
export class MonthComponent {
@Output() changeMonth = new EventEmitter<string>();
month:{ value: string; name: string }={ value: '', name: '' };
monthReal = new Date().getMonth() + 1; 
monthAll = [
    { value: '1', name: 'January' },
    { value: '2', name: 'February' },
    { value: '3', name: 'March' },
    { value: '4', name: 'April' },
    { value: '5', name: 'May' },
    { value: '6', name: 'June' },
    { value: '7', name: 'July' },
    { value: '8', name: 'August' },
    { value: '9', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' }
  ];
OnChangeMonth(){
  console.log(this.month);
  this.changeMonth.emit(this.month.name);  
}
}
