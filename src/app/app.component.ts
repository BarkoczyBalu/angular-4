import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userDatas:any;

  constructor(private http: HttpClient){
    this.userDatas = http.get("https://jsonplaceholder.typicode.com/users")
  }

}
