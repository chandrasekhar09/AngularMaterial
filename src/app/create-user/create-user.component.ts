import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormControlName,
  FormsModule,
} from '@angular/forms';
import { UsersAPIService } from '../api-service/users-api.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  constructor(private usersAPI: UsersAPIService) {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    logoURL: new FormControl(''),
    website: new FormControl(''),
  });

  submitUserForm() {
    console.log('user Form Data');
    console.log(this.userForm.value);
    this.usersAPI.createUser(this.userForm.value).subscribe((data) => {
      console.log('data posted successfully');

      console.log(data);
      this.userForm.reset();
      location.reload();
    });
  }
}
