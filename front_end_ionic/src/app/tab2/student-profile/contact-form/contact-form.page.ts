import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  student= {
    email:null,
    fmail:null,
    memail:null,
    phno:null,
    fno:null,
    mno:null,
    address:null,
    city:null,
    state:null,
    pincode:null,
  }

  url=localStorage.url_path;
    id:string;


  constructor(private router: Router ,public http:HttpClient,private route: ActivatedRoute) { }

  addContact(){
  this.http.put(this.url +"api/liststudent/update/"+this.id,{
    email:this.student.email,
    fmail:this.student.fmail,
    memail:this.student.memail,
    phno:this.student.phno,
    fno:this.student.fno,
    mno:this.student.mno,
    address:this.student.address,
    city:this.student.city,
    state:this.student.state,
    pincode:this.student.pincode,
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
