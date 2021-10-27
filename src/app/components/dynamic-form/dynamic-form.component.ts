import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
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
  @Output() OnSubmit : EventEmitter<any> = new EventEmitter();

  constructor() {}    
  ngOnInit() {
    let group:any={}    
    this.formTemplate.forEach((element:any)=>{
      if(element.element_type==='checkbox' && element.requiredTrue){
        group[element.name] = new FormControl(false,  Validators.requiredTrue);
      }else{
        group[element.name] = new FormControl(element.value||'');
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
    this.OnSubmit.emit(this.myFormGroup.value)
  }

  onCancel(){
    window.history.back();
  }

}
