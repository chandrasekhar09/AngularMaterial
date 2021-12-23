import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersAPIService {
  constructor(private http: HttpClient) {}
  // API: string = 'http://localhost:3000/posts';
  API: string =
    'https://chandraa-7b6f5-default-rtdb.asia-southeast1.firebasedatabase.app/users.json';

  createUser(data: any) {
    return this.http.post(this.API, data);
  }

  getAllUserData() {
    return this.http.get(this.API);
  }
}
