import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})




export class EmployeeFormComponent {

  jsonDataResult: any;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  dateContact = new FormControl(new Date());
  serializedDate2 = new FormControl(new Date().toISOString());


  hn:string = '';

  provinces: any = [];
  districts: any = [];
  sub_districts: any = [];
  countries: any = [];
  contacts: any = [];
  occupation_class: any = [];
  occupation_of_person: any = [];
  status_person: any = [];

  // objectData2: any = [{"id":7,"isRequestGrants":true,"orderNo":1,"fundingName":"ทุนส่งเสริมนักวิจัยรุ่นใหม่","fundingComment":"สนับสนุนไม่เกิน 300,000 บาทต่อโครงการ ระยะเวลาดำเนินการไม่เกิน 2 ปี","announcementNumber":"","isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF01","createBy":"admin","createDate":"2021-11-22T00:00:00","updateBy":"admin","updateDate":"2021-11-22T00:00:00","inActivated":false},{"id":8,"isRequestGrants":true,"orderNo":2,"fundingName":"ทุนวิจัยสร้างองค์ความรู้","fundingComment":"สนับสนุนไม่เกิน 1,000,000 บาทต่อโครงการ ระยะเวลาดำเนินการไม่เกิน 2 ปี","announcementNumber":"","isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF02","createBy":"admin","createDate":"2021-11-22T00:00:00","updateBy":"admin","updateDate":"2021-11-22T00:00:00","inActivated":false},{"id":9,"isRequestGrants":true,"orderNo":3,"fundingName":"ทุนวิจัยระดับแนวหน้า","fundingComment":"สนับสนุนไม่เกิน 2,000,000 บาทต่อโครงการ ระยะเวลาดำเนินการไม่เกิน 2 ปี","announcementNumber":"","isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF03","createBy":"admin","createDate":"2021-11-22T00:00:00","updateBy":"admin","updateDate":"2021-11-22T00:00:00","inActivated":false},{"id":10,"isRequestGrants":true,"orderNo":4,"fundingName":"ทุนสมทบโครงการวิจัย","fundingComment":"สมทบ in-cash ไม่เกิน 50% และไม่เกิน 1 ล้านบาทของงบประมาณทั้งโครงการ","announcementNumber":"","isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF04","createBy":"admin","createDate":"2021-11-22T00:00:00","updateBy":"admin","updateDate":"2021-11-22T00:00:00","inActivated":false},{"id":13,"isRequestGrants":true,"orderNo":5,"fundingName":"ทุนวิจัยฯ โควิด-19","fundingComment":"","announcementNumber":"","isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF05","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":14,"isRequestGrants":true,"orderNo":6,"fundingName":"ทุนวิจัยพื้นฐานและวิจัยประยุกต์ 4 กลุ่มโรค","fundingComment":"","announcementNumber":"","isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF06","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":15,"isRequestGrants":true,"orderNo":7,"fundingName":"ทุนวิจัยหน่วยงาน - วิทยาลัยแพทยศาสตร์ศรีสวางควัฒน","fundingComment":"","announcementNumber":"","isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"ISF07","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":16,"isRequestGrants":true,"orderNo":8,"fundingName":"ทุนวิจัยหน่วยงาน - คณะพยาบาลศาสตร์","fundingComment":"","announcementNumber":"","isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"ISF07","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":17,"isRequestGrants":true,"orderNo":9,"fundingName":"ทุนวิจัยหน่วยงาน - คณะเทคโนโลยีวิทยาศาสตร์สุขภาพ","fundingComment":"","announcementNumber":"","isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"ISF07","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":18,"isRequestGrants":true,"orderNo":10,"fundingName":"ทุนวิจัยหน่วยงาน- คณะสัตวแพทยศาสตร์และสัตววิทยาประยุกต์","fundingComment":"","announcementNumber":"","isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"ISF07","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":21,"isRequestGrants":true,"orderNo":11,"fundingName":"ทุนวิจัยหน่วยงาน - สำนักวิชาการศึกษาทั่วไปและสำนักวิชาการศึกษาคลินิกชั้นสูง","fundingComment":null,"announcementNumber":null,"isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"ISF07","createBy":"admin","createDate":"2022-11-10T00:00:00","updateBy":"admin","updateDate":"2022-11-10T00:00:00","inActivated":false},{"id":22,"isRequestGrants":true,"orderNo":12,"fundingName":"ทุนวิจัยหน่วยงาน - ศูนย์จำลองสถานการณ์เพื่อการเรียนรู้","fundingComment":null,"announcementNumber":null,"isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF07","createBy":"admin","createDate":"2022-11-10T00:00:00","updateBy":"admin","updateDate":"2022-11-10T00:00:00","inActivated":false},{"id":23,"isRequestGrants":true,"orderNo":13,"fundingName":"ทุนวิจัยหน่วยงาน - โรงพยาบาลจุฬาภรณ์","fundingComment":null,"announcementNumber":null,"isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF07","createBy":"admin","createDate":"2022-11-10T00:00:00","updateBy":"admin","updateDate":"2022-11-10T00:00:00","inActivated":false},{"id":19,"isRequestGrants":true,"orderNo":14,"fundingName":"ทุนพัฒนางานประจำสู่งานวิจัย","fundingComment":"","announcementNumber":"","isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"R2R","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":20,"isRequestGrants":true,"orderNo":15,"fundingName":"ทุนนวัตกรรมและสิ่งประดิษฐ์คิดค้น","fundingComment":"","announcementNumber":"","isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"IIF","createBy":"admin","createDate":"2021-12-11T00:00:00","updateBy":"admin","updateDate":"2021-12-11T00:00:00","inActivated":false},{"id":24,"isRequestGrants":true,"orderNo":16,"fundingName":"ทุนวิจัยและนวัตกรรมเพื่อยกระดับความพร้อมด้านการแพทย์และสาธารณสุข","fundingComment":null,"announcementNumber":null,"isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF08","createBy":"admin","createDate":"2022-11-10T00:00:00","updateBy":"admin","updateDate":"2022-11-10T00:00:00","inActivated":false},{"id":25,"isRequestGrants":true,"orderNo":17,"fundingName":"ทุนวิจัยบูรณาการสุขภาพหนึ่งเดียว","fundingComment":null,"announcementNumber":null,"isAttachFileOnly":false,"fundingType":1,"prefixRunNo":"ISF09","createBy":"admin","createDate":"2022-11-10T00:00:00","updateBy":"admin","updateDate":"2022-11-10T00:00:00","inActivated":false},{"id":11,"isRequestGrants":true,"orderNo":99,"fundingName":"อื่น ๆ","fundingComment":"","announcementNumber":"","isAttachFileOnly":true,"fundingType":1,"prefixRunNo":"OIF","createBy":"admin","createDate":"2021-11-22T00:00:00","updateBy":"admin","updateDate":"2021-11-22T00:00:00","inActivated":false}] 


  objfundingName: any = []

  objectData2: any = []





  constructor(private httpClient: HttpClient){}

  ngOnInit(){

    // let origin = window.location.origin

    console.log(origin)

    this.httpClient.get("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json").subscribe(data =>{
      this.provinces = data;
    })

    this.httpClient.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json').subscribe(data=> {
      this.districts = data;
    })

    this.httpClient.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json').subscribe(data=> {
      this.sub_districts = data;
    })

    this.httpClient.get('https://raw.githubusercontent.com/ponlawat-w/country-list-th/master/country-list-th.json').subscribe(data=> {
      this.countries = data;

    })

    this.httpClient.get('https://raw.githubusercontent.com/aimnoii555/api_contact/main/contacts.json').subscribe(data=> {
      // console.log(data)
      this.contacts = data;
    })

    this.httpClient.get('https://raw.githubusercontent.com/aimnoii555/api_contact/main/occupation.json').subscribe(data=> {
      this.occupation_class = data;
    })

    this.httpClient.get('https://raw.githubusercontent.com/aimnoii555/api_contact/main/occupation_of_person.json').subscribe(data=> {
      this.occupation_of_person = data;
    })

    this.httpClient.get('https://raw.githubusercontent.com/aimnoii555/api_contact/main/status.json').subscribe(data=> {
      this.status_person = data;
    })

    this.httpClient.get('https://raw.githubusercontent.com/aimnoii555/api_contact/main/funding.json').subscribe(data=> {
        this.objectData2 = data
    })

    // this.dataJson(); 
  }

  
  // dataJson(){
  //   try {
  //     console.log(this.objectData2)
      
     
  //     for (let index = 0; index < this.objectData2.length; index++) {

  //       this.objfundingName.push({fundingName: this.objectData2[index].fundingName})
  //       console.log('objectFundingName', this.objfundingName)

  //       this.hn = this.objectData2[1].prefixRunNo
        
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  prefiexEng:any = [
    {
      prefixName: 'Mr',
    },
    {
      prefixName: 'Miss'
    },
    {
      prefixName: 'Mrs'
    }
  ]

  prefiexTh:any = [
    {
      prefixName: 'นาย',
    },
    {
      prefixName: 'นางสาว'
    },
    {
      prefixName: 'นาง'
    }
  ]

  gender:any = [
    {
      gender: 'ชาย'
    },
    {
      gender: 'หญิง'
    }
  ]

  blood:any = [
    {
      blood: 'A'
    },
    {
      blood: 'B'
    },
    {
      blood: 'AB'
    },
    {
      blood: 'O'
    }
  ]
  
  rh:any = [
    {
      rh: 'A+'
    },
    {
      rh: 'B+'
    },
    {
      rh: 'AB+'
    },
    {
      rh: 'O'
    },
  ]

  allergy: any = [
    {
      allergy: 'Yes'
    },
    {
      allergy: 'No'
    }
  ]

  status: any = [
    {
      status: 'Single'
    },
    {
      status: 'Married'
    },
  ]

  patient_category: any = [
    {
      pc: 'high blood pressure'
    },
    {
      pc: 'coronary artery arrhythmia'
    },
    {
      pc: 'diabetes'
    },
    {
      pc: 'dialysis and kidney transplant patients'
    },
    {
      pc: 'chronic pneumonia'
    },
    {
      pc: 'Chronic kidney disease'
    },
    {
      pc: 'asthma'
    },
    {
      pc: 'cirrhosis'
    },
    {
      pc: 'chronic hepatitis'
    },
    {
      pc: 'Immunodeficiency'
    },
    {
      pc: 'fat'
    },
  ]

  nationality: any = [
    {
      nationality: 'Thai'
    }
  ]

  ethicity: any = [
    {
      ethicity: 'Thai'
    }
  ]

  religion: any = [
    {
      religion: 'Religion'
    },
    {
      religion: 'Christianity'
    },
    {
      religion: 'Islam'
    },
    {
      religion: 'Buddhism'
    }
  ]

  language: any = [
    {
      language: 'Thai'
    },
    {
      language: 'English'
    }
  ]

}


