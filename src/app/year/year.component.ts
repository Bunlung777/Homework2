import { CommonModule, NgClass } from '@angular/common';
import { Component,OnInit, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-year',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Output() OnYear = new EventEmitter<string>();
  year: { value: string; name: string } = { value: '', name: '' };
  yearReal = new Date().getFullYear(); 
  yearAll: { value: string; name: string }[] = []
  ngOnInit(): void {
    this.years();
  }
  years(){
    for(let i=2022; i<=this.yearReal;i++){
      this.yearAll.push({value:i.toString(),name:i.toString()});
    }
  }
  OnChangeYear(){
    this.OnYear.emit(this.year.name);
  }
}
