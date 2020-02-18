import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../user-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  //userId
  User;
  constructor(private userServices: UserServicesService, private activatedRoute: ActivatedRoute) {
    const USER_ID = activatedRoute.snapshot.params["userId"];
     userServices.getUser(USER_ID).subscribe(
               Response => { this.User = Response
               console.log(Response)
               console.log(this.User)
               return this.User;
      }
    )
    console.log(Response)
    //console.log(this.userId)
    console.log(this.User)
   }

  ngOnInit() {
  }

}
