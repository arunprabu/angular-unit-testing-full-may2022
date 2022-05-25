import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    return [
      {
          id: 1,
          name: 'Arun',
          email: 'a@b.com'
      },
      {
          id: 2,
          name: 'John',
          email: 'j@k.com'
      }
    ];
  }
}
