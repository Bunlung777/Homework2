import { Component, Input, OnChanges, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';
import { NgxCurrencyDirective } from 'ngx-currency';
import { TaxData } from '../models/taxdata.model';
@Component({
  selector: 'app-confirm-and-review',
  standalone: true,
  imports: [FormsModule,
      NgClass,
      CommonModule,
      NgxCurrencyDirective,
    ],
  templateUrl: './confirm-and-review.component.html',
  styleUrl: './confirm-and-review.component.css'
})
export class ConfirmAndReviewComponent implements OnChanges , OnInit {
@Input() filingType:string='0';
@Input() saleAmount:number=0;
@Input() Tax:number=0;
@Input() Moth:string='';
@Input() Year:string='';
 @Input() taxData!: TaxData;
TaxDatalAll = {}
showUserModal = false;
  
ngOnInit() {

}

ngOnChanges(){
    this.TaxDatalAll = {
    filingType: this.taxData.filingType,
    month: this.taxData.month,
    year: this.taxData.year,
    saleAmount: this.taxData.saleAmount,
    taxAmount: this.taxData.taxAmount,
    surcharge: this.taxData.surcharge,
    penalty: this.taxData.penalty,
    totalAmount: this.taxData.totalAmount
  };
  console.log("TaxDatalAll",this.taxData);
  if(this.filingType==='0'){
    this.filingType='Original Filing';
  }else if(this.filingType==='1'){
    this.filingType='Additional Filing';
  }
  console.log("filingType",this.filingType);
}

  openModal() {
    this.showUserModal = true;
  }

  closeModal() {
    this.showUserModal = false;
  }

  submit() {
    console.log('Submit:', this.taxData);
    this.closeModal();
  }

}
