import { Component, OnInit } from '@angular/core';
import { UsersAPIService } from '../api-service/users-api.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss'],
})
export class ViewUsersComponent implements OnInit {
  constructor(private usersAPI: UsersAPIService) {}

  ngOnInit(): void {
    this.getUserData();
    // this.print();
  }

  userData: any = [];
  resultArray: any = [];

  getUserData() {
    // this.usersAPI.getAllUserData().subscribe((data: any) => {
    //   //   this.userData = data;
    //   console.log('data from server');

    //   console.log(data);
    // });

    this.usersAPI.getAllUserData().subscribe((data): any => {
      const usersArr = [];
      for (const key in data) {
        console.log('t');
        usersArr.push({ ...data[key], id: key });
      }
      console.log(usersArr);
      this.resultArray = usersArr;
      this.userData = usersArr;
    });
  }

  sendRequest(event: any) {
    this.resultArray = [];
    this.userData.forEach((element: any) => {
      if (
        element.name.toUpperCase().includes(event.target.value.toUpperCase())
      ) {
        this.resultArray.push(element);
      }
    });
    if (event.target.value == '') {
      this.resultArray = [];
    }
  }
}
