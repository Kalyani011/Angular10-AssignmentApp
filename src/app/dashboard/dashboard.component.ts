import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  role = "Admin";
  showHeadlines: boolean = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.role = this.route.snapshot.params['role'];
    this.showHeadlines = this.role === "C" ? false : true;
  }

}
