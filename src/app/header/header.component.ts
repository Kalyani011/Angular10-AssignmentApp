import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() role: string = "";
  links = [""];

  constructor() {
  }

  ngOnInit(): void {
    this.links = ["Home", "Explore", "Your Courses", "Profile"];
    switch (this.role) {
      case "A":
        this.links.splice(2, 2);
        break;
      case "B":
        this.links.shift();
        break;
      case "none":
        this.links.length = 0;
        break;
      default:
        break;
    }
  }

}
