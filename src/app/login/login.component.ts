import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  role: string = "none";
  users = [
    {
      name: "Amy",
      role: "A"
    },
    {
      name: "Bob",
      role: "B"
    },
    {
      name: "Cassy",
      role: "C"
    },
    {
      name: "Admin",
      role: "Admin"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDashboard() {
    this.role = this.users.find((user) => { return user.name === this.userName })!.role;
    this.router.navigate(['/dashboard', this.role]);
  }
}
