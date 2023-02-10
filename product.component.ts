import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {



  dataSource = new MatTableDataSource();
  displayedColumns = ['PreFixName',
    'FirstName', 'LastName', 'Age'
     , 'Address','PostCode','Position'
  ];
  objRowSelected: any;
  filter: string = "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  PreFixName: string = '';
  FirstName: string = '';
  LastName: string = '';
  Age: string = '';
  Address: string = '';
  PostCode: string = '';
  Position: string = '';
  header: string = "";
  content: string = "";

  dataInternShip: any =[];


  objectData: any = {
    PreFixName: this.PreFixName,
    FirstName: this.FirstName,
    LastName: this.LastName,
    Age: this.Age,
    Address: this.Address,
    PostCode: this.PostCode,
    Position: this.Position


  };

  ngOnInit(): void {
   
  }

  validate() {
    let strValidate:string = "";
    this.header = 'Validate';

    if (this.objectData.PreFixName == "") {
      strValidate = 'Address is Empty';
    }

    if(this.objectData.FirstName == "" ) {
      strValidate = 'FirstName is Empty';
    }

    if(this.objectData.LastName == "" ) {
      strValidate = 'LastName is Empty';

    }if(this.objectData.Age == "" ) {
      strValidate = 'Age is Empty';
    }

    if(this.objectData.Address == "" ) {
      strValidate = 'Address is Empty';
    }

    if(this.objectData.PostCode == "" ) {
      strValidate = 'PostCode is Empty';
    }

    if(this.objectData.Position == "" ) {
      strValidate = 'Position is Empty';
    }

    if (strValidate != "") {
      this.openDialog(this.header,strValidate)
      return false;
    }else{
      return true;
    }
  }

  openDialog(header: string, content: string): void {
    let dialogRef = this.dialog.open(DialogValidate,{
      width: '250px',
      data: {header: header, content: content}
    })

    dialogRef.afterClosed().subscribe(result=> {
      console.log('The dialog was closed')
      this.content = result;
    })
  }



  btnSave() {
    
    if (this.validate()) {
      console.log('ObjectData',this.objectData)
      this.dataInternShip.push(this.objectData)
      this.dataSource  = this.dataInternShip;
    }
    
  
  }

  btnDelete() {

  }

  btnSend() {

  }


  constructor(public dialog: MatDialog){}

}

@Component({
  selector: 'dialog-validate',
  templateUrl: 'dialog-validate.html'
})

export class DialogValidate {
  constructor(
    public dialogRef: MatDialogRef<DialogValidate>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onOkClick(): void {
    this.dialogRef.close()
  }

  onCancelClick(): void {
    this.dialogRef.close()
  }

  
  
}
