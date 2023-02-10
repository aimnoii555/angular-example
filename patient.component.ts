import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  ngOnInit(): void {
    
  }

  dataSource = new MatTableDataSource();
  displayedColumns = ['patient_id',
    'name', 'id_card', 'gender'
     , 'status'
  ];
  objRowSelected: any;
  filter: string = "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  

  patient_id: string = '';
  name: string = '';
  id_card: string = '';
  gender: string = '';
  status: string = '';

  dataPatient: any = [];

  objectDatapatient: any = {
    patient_id: this.patient_id,
    name: this.name,
    id_card: this.id_card,
    gender: this.gender,
    status: this.status
  }


  btnSearch() {
    console.log('ObjectData',this.objectDatapatient)
    this.dataPatient.push(this.objectDatapatient)
    this.dataSource  = this.dataPatient;

    this.objectDatapatient = ''
  }

  btnClear() {
    this.dataPatient =[];
    this.dataSource = this.dataPatient;

    console.log(this.dataSource)
  }

}
