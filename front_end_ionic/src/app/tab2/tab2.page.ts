import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})




export class Tab2Page {
    students:any;
    url=localStorage.url_path;

  constructor(private router: Router,public http:HttpClient) {
    this.getStudents();
   }

  getStudents(){
    this.http.get(this.url + 'api/liststudent').subscribe(data=>{
      console.log(data);
      this.students=data;
      for(let i=0;i<this.students.length;i++){
        this.students[i]['imagepath']= this.url +data[i].simage;
    }
    },error=>{console.log(error)})
}
  openprofile(id){
    this.router.navigate(['/tabs/tab2/student-profile/',id]);
  }

  openStudentForm(){
    this.router.navigate(['/tabs/tab2/student-form']);
  }

  

  doRefresh(event) {
    console.log('Begin async operation');
    this.getStudents();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  
  
}
