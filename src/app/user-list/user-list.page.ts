import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../user-services.service';
import { Observable } from 'rxjs';
import { RootObject } from '../types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  //listOfUser:Observable<RootObject>
  listOfUser;
  constructor(userServices : UserServicesService) {
     userServices.getUse().subscribe(
       reponse =>{ this.listOfUser = reponse
         /*console.log(reponse);
       console.log(listOfUser);*/} 
     );
     console.log(this.listOfUser);
   }

  ngOnInit() {
  }

}
