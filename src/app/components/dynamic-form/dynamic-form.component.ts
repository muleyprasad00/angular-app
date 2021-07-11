import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl,Validators } from '@angular/forms';

const form_template:any = [
  {
    "element_type":"textBox",
    "label":"Name",
    "name":"name",
    "class":"col-lg-6",
    "placeholder":"Name",
    "type":"text"
  },
  {
    "element_type":"textBox",
    "label":"Address",
    "name":"address",
    "class":"col-lg-6",
    "placeholder":"Address",
    "type":"text"
  },
  {
    "element_type":"textBox",
    "label":"City",
    "name":"city",
    "class":"col-lg-4",
    "placeholder":"City",
    "type":"text"
  },
  {
    "element_type":"textBox",
    "label":"State",
    "name":"state",
    "class":"col-lg-4",
    "placeholder":"State",
    "type":"text"
  },
  {
    "element_type":"textBox",
    "label":"Country",
    "name":"country",
    "class":"col-lg-4",
    "placeholder":"Country",
    "type":"text"
  },
  {
    "element_type":"textBox",
    "label":"Mobile No",
    "name":"name",
    "class":"col-lg-4",
    "placeholder":"Mobile No",
    "type":"number"
  },
  {
    "element_type":"select",
    "label":"Favorite Book",
    "name":"favorite_book",
    "class":"col-lg-4",
    "options":["Jane Eyre","Pride and Prejudice","Wuthering Heights"]
  }
]

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  myFormGroup:any;

  formTemplate:any = form_template; 
  constructor() {}    
  ngOnInit() {
    let group:any={}    
    form_template.forEach((input_template:any)=>{
      group[input_template.label]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);
  }
  onSubmit(){
    console.log(this.myFormGroup.value);
  }

  onCancel(){
    window.history.back();
  }

}
