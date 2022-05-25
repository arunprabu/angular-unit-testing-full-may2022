import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
