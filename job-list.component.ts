import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  jobNumber: string ='';
  taskNumber: string = '';
  jobType: string = '';
  jobTypeCheckList: string = '';
  workOrderDate: string = '';
  customer: string = '';
  projectName: string = '';
  address: string = '';
  lat: string = '';
  lng: string = '';
  contactDate: string = '';
  contactName: string = '';
  phoneNo: string = '';
  saleName: string = '';
  phoneNo2: string = '';

  
  objectData: any ={
    jobNumber: '',
    taskNumber: '',
    jobType: '',
    jobTypeCheckList: '',
    workOrderDate: '',
    customer: '',
    projectName: '',
    address: '',
    lat: '',
    lng: '',
    contactDate: '',
    contactName: '',
    saleName: '',
    phoneNo: '',
    phoneNo2: ''

  }



  btnSave() {
    console.log('ObjectData', this.objectData)
  }

  btnClose() {
    
  }


  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  dateContact = new FormControl(new Date());
  serializedDate2 = new FormControl(new Date().toISOString());
}


