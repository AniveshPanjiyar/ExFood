import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.page.html',
  styleUrls: ['./health-form.page.scss'],
})
export class HealthFormPage implements OnInit {
    student={
      bloodgr:null,
      vision:null,
      mentalstate:null,
      allergies:null,
      weight:null,
      height:null,
      dentalstate:null,
      hearing:null,
      pulserate:null,
      bloodpressure:null
    }

    url=localStorage.url_path;
    id:string;

  constructor(private router: Router ,public http:HttpClient,private route: ActivatedRoute) { }

  updateHealth(){
  this.http.put(this.url +"api/liststudent/update/"+this.id,{
    "bloodgr":this.student.bloodgr,
    "vision":this.student.vision,
    "mentalstate":this.student.mentalstate,
    "allergies":this.student.allergies,
    "weight":this.student.weight,
   "height":this.student.height,
    "dentalstate":this.student.dentalstate,
    "hearing":this.student.hearing,
    "pulserate":this.student.pulserate,
    "bloodpressure":this.student.bloodpressure
  }).subscribe(data=>{
    console.log(data);
    if(data){this.router.navigate(['/tabs/tab2/student-profile',this.id]);}
  },error=>{
    console.log(error)
  })
  console.log(this.id);
  }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
  }

 
}
