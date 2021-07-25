import { Component, Input, OnInit } from '@angular/core'; 
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  myFormGroup:any;
  registerForm: any;
  submitted = false;
  @Input() formTemplate:any = []

  constructor() {}    
  ngOnInit() {
    let group:any={}    
    this.formTemplate.forEach((element:any)=>{
      if(element.element_type==='checkbox' && element.requiredTrue){
        group[element.name] = new FormControl(false,  Validators.requiredTrue);
      }else{
        group[element.name] = new FormControl('');
      }      
    })
    this.myFormGroup = new FormGroup(group);
  }

  // convenience getter for easy access to form fields
  getFC(fc:any) {
    return this.myFormGroup.controls[fc]; 
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.myFormGroup.invalid) {
      return;
  }
    alert(JSON.stringify(this.myFormGroup.value))
  }

  onCancel(){
    window.history.back();
  }

}
