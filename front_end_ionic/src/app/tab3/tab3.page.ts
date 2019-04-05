import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

updates:any;
url=localStorage.url_path;


constructor(private router: Router ,public http:HttpClient,private route: ActivatedRoute) { 
this.getUpdates();
}


getUpdates(){
  this.http.get(this.url +'api/getupdate').subscribe(data=>
    {console.log(data);this.updates=data;},
    error=>{console.log(error)}
    )
}

doRefresh(event) {
  console.log('Begin async operation');
  this.getUpdates();

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}


}
