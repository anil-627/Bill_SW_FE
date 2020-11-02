import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-billing',
  templateUrl: './create-billing.component.html',
  styleUrls: ['./create-billing.component.scss']
})
export class CreateBillingComponent implements OnInit {

  billingFormGroup: FormGroup;
  gridData: FormArray;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) 
    { }

  ngOnInit(): void {
    this.getFormGroup();
  }
  getFormGroup() {
    this.billingFormGroup = this.fb.group(
      {
        invoiceNo: ['', Validators.required],
        invoiceDate: [new Date().toLocaleString(), Validators.required],
        customerName: [''],
        customerNo: [''],
        gridData: this.fb.array([this.createItem()]),
      }
    )
  }

  onAddCustomField() {
    this.gridData = this.billingFormGroup.get('gridData') as FormArray;

    this.gridData.push(this.createItem());

  }
  onRemoveCustomField(id: number, gridObj: any) {
    const len = gridObj.length;
    // this.count = 0;

    if (len > 1) {
      (<FormArray>this.billingFormGroup.controls['gridData']).removeAt(id);
    }
    
  }

  createItem(): FormGroup {

    return this.fb.group({
      slno:[''],
      itemNumber:[],
      itemName:[],
      quantity:[],
      mrp:[],
      totalAmt:[],
      discount:[],
      netAmount:[],     
    });

  }

  onSubmit() {
    console.log(this.billingFormGroup.value);
    const obj={
    }
    this.http.post("http://localhost:8080/api/billing/saveBillingData", this.billingFormGroup.value).subscribe(
      res => {
        console.log(res);
        alert("User Saved Successfully");
        this.billingFormGroup.reset();
        this.formGroupDirective.resetForm();
        this.getFormGroup();
      }, error => {
        console.log(error);

      });
  }
  calculateGridAmount(discount:any,mrp:any,quantity:any,i: any)
  {
    console.log(discount,'===',mrp,'===',quantity,'====',i);
    
    var totalAmount=mrp*quantity;
    console.log('Total ammount',totalAmount);
   // this.billingFormGroup.controls['gridData'].controls['i'].value['totalAmt'];
   var data= this.billingFormGroup.get['gridData'].get[i].get['totalAmt'].value;
   console.log('data ammount',data);
//sfsfsf
    this.billingFormGroup.patchValue({
      
      gridData:{
        i:{
          totalAmt:totalAmount,
          netAmount:totalAmount, 
        }
       
      }

    })
    if(totalAmount!==0 && totalAmount!==null){
      
      var discountamount=(totalAmount/100)*discount;
      var netammount=totalAmount-discountamount;

      console.log('disc amount',discountamount);

      console.log('net amount',netammount);
      this.billingFormGroup.patchValue({
        gridData:{
          0:{
            netAmount:netammount,
          }
        
        }
      })
    } 
  }

}
