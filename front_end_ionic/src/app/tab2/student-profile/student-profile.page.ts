import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
})
export class StudentProfilePage implements OnInit {



  public section: string = 'one';
  studentDetail:any;
  /* studentDetail={
    simage: String,

    name:String,
    age: String,
    class: String,
    section: String,
    rollno: String,
    fname:String,
    mname: String,
    dob:String,
    gender:String,
    hobby:String,
 
    email:String,
    fmail:String,
    memail:String,
    phno:String,
    fno:String,
    mno:String,
 
    address:String,
    city:String,
    state:String,
    pincode:String,
 
    bloodgr:String,
    vision:String,
    mentalstate:String,
    allergies:String,
    weight:String,
    height:String,
    dentalstate:String,
    hearing:String,
    pulserate:String,
    bloodpressure:String
  }
 */
  _id;
  url=localStorage.url_path;
  
  constructor(private router: Router ,public http:HttpClient,private route: ActivatedRoute,) {
   
   
    this.getStudentDetail(this._id);
   
  }

  getStudentDetail(_id){
      this.http.get(this.url+"api/liststudent/"+_id).subscribe(data=>
        {console.log(data);
        this.studentDetail=data;
        this.studentDetail['imagepath']= this.url + this.studentDetail.simage ;
        },


        error=>{
          console.log(error);
        })
  }
  
  
  openContactForm(id){
    this.router.navigate(['/tabs/tab2/student-profile',id,'contact-form'],id);
  }

 openHealthForm(id){
    this.router.navigate(['/tabs/tab2/student-profile',id ,'health-form']);
  }
  openstudentForm(id){
    this.router.navigate(['/tabs/tab2/student-profile',id ,'student-form']);
  }

  onTabChanged(tabName) {
    this.section = tabName;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
   
  }
  

  ngOnInit() {
   this._id =this.route.snapshot.paramMap.get('id');
   this.getStudentDetail(this._id);
  }

  ionViewWillEnter(){
    this.getStudentDetail(this._id);
  }


  doRefresh(event) {
    console.log('Begin async operation');
    this.getStudentDetail(this._id);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
 

}
