import { Component, EventEmitter, Output,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
@Component({
  selector: 'app-filing-type',
  standalone: true,
  imports: [FormsModule,
  NgClass,
  CommonModule],
  templateUrl: './filing-type.component.html',
  styleUrl: './filing-type.component.css'
})
export class FilingTypeComponent implements OnInit {
  filingType: string = '';  
  @Output() changeType = new EventEmitter<string>();
  @Input() Next:string='0';
  ngOnInit(){
    this.filingType='0';
  }
  onShow() {
    this.changeType.emit(this.filingType);
    console.log(this.Next);
  }
}
