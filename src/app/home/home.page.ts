import { Component } from '@angular/core';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:string;
  password:string;
  
  constructor(private userServices: UserServicesService) {
    userServices.getUsers().subscribe(
      response => {
        /*for(let key in response){
          console.log(key);
        }*/

      }
    )
  }

}
