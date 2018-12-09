import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';




@Component({
  selector: 'app-msadmin',
  templateUrl: './msadmin.component.html',
  styleUrls: ['./msadmin.component.css']
})
export class MsadminComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Mr. Rakesh', 'Dr. Rohan', 'Sh. gaurav', 'Sh. Rajan', 'Amit tandon', 'Vikas sharma'];


  startDate = new Date(2018, 10, 1);


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  
  
  
  }
}