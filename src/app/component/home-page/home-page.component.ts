import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public userList:any[]=[];
public user:string[]=[];
   constructor(private apidata:HttpService){

   }
  ngOnInit(): void {
    this.apidata.GetUsers().subscribe(i=>this.userList=i);
    this.apidata.GetUser().subscribe(i=>this.user=i);
    console.log(this.userList);
  }


}
