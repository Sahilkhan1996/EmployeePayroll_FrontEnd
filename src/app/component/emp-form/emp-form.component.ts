import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {
  sal:any=200000;

  departments:string[]=["HR","Sales","Engineer","Finance","Other"];

  constructor(private fb:FormBuilder){

  }
  public frmRegister=this.fb.group({
    Name:this.fb.control(""),
    profile:this.fb.control(""),
    gender:this.fb.control(""),
    Department:this.fb.array([]),
    Salary:this.fb.control(0),
    StartDate:this.fb.control(''),
    Notes:this.fb.control("")
  })


  submitForm(obj:any){
    alert(JSON.stringify(obj));
  }

  onChangesSalary(salry:number){
this.sal=salry;
  }

  onChanges(): void{
    this.frmRegister.get("Salary")?.valueChanges.subscribe(val=>
      {
        this.sal=val;
      }
        
      );
  }
  onChange(e:any){
    const checkedValue=e.target.value;
    const checked=e.target.checked;
    console.log(checkedValue, checked);
    const checkedArray=this.frmRegister.get('Department') as FormArray;
    if(checked){
      checkedArray.push(new FormControl(checkedValue));
    }else{
      let i:number=0;
      checkedArray.controls.forEach((item)=>{
        if(item.value==checkedValue){
          checkedArray.removeAt(i);
        }
        i++;
      } 
      );
    }
  
  }
  
  



}



