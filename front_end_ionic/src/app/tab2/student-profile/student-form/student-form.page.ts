import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.page.html',
  styleUrls: ['./student-form.page.scss'],
})
export class StudentFormPage implements OnInit {
  url=localStorage.url_path;
  studentForm={
    "simage": "",
    "name":"",
   "age": "",
    "class": "",
    "section": "",
    "rollno": "",
    "fname":"",
    "mname": "",
    "dob":"",
    "gender":"",
    "hobby":"",
    
  }


  id:string;

  constructor(private router: Router ,public http:HttpClient,private route: ActivatedRoute) { }

  addUser(){
    this.http.put(this.url +"api/liststudent/update/"+this.id,{
              "name":this.studentForm.name,
              "age": this.studentForm.age,
               "class": this.studentForm.class,
               "section": this.studentForm.section,
               "rollno": this.studentForm.rollno,
               "fname":this.studentForm.fname,
               "mname": this.studentForm.mname,
               "dob":this.studentForm.dob,
               "gender":this.studentForm.gender,
               "hobby":this.studentForm.hobby,
    }).subscribe(data=>{
      console.log(data);
      if(data){this.router.navigate(['/tabs/tab2/student-profile',this.id]);}
    },error=>{
      console.log(error);
    })
    console.log(this.studentForm);
  }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
  }

}
