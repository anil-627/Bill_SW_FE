import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  accessLevels:any
 /*  this.accessLevels: any[] = [
    { value: '0', viewValue: 'Admin' },
    { value: '1', viewValue: 'User' },
    { value: '2', viewValue: 'Other' }
  ]; */

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getFormGroup();
    this.getRoles();
  }
  getFormGroup() {
    this.userForm = this.fb.group({
      userName: ['',Validators.required],
      mobileNumber: ['',Validators.required],
      gender: ['1'],
      role: ['',Validators.required],
      password: ['',Validators.required ],
      status:['1'],
      });
    }
  onSubmit() {
   console.log(this.userForm.value);
    this.http.post("http://localhost:8080/api/master/saveCreateMaster", this.userForm.value).subscribe(
      res => {
        console.log(res);
        alert("User Saved Successfully");
        this.userForm.reset();
        this.formGroupDirective.resetForm();
        this.getFormGroup();
      }, error => {
        console.log(error);

      });
  }

  getRoles()
  {
    const obj={}
    this.http.post("http://localhost:8080/api/master/getRoles", obj).subscribe(
      res=>{
          this.accessLevels=res;
      },error=>{
        this.accessLevels=[]
      });
  }


   
}
