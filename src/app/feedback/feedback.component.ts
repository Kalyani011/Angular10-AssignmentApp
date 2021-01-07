import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  isSubmitted: boolean = false;
  userName: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmitted(isFormSubmitted: boolean) {
    this.isSubmitted = isFormSubmitted;
  }

  onNameSubmitted(userName: string) {
    this.userName = userName;
  }
}
