import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    feeds:any;
    

    url=localStorage.url_path;


  constructor(private router: Router,public http:HttpClient) {
    this.getfeeds();
   }

   getfeeds(){

    this.http.get(this.url + "api").subscribe(data=>{
      console.log(data);
      this.feeds=data;
      for(let i=0;i<this.feeds.length;i++){
          this.feeds[i]['imagePath']= this.url +data[i].fimage;
      }
     
    },error=>{
      console.log(error)
    })
   }

   doRefresh(event) {
    console.log('Begin async operation');
    this.getfeeds();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
