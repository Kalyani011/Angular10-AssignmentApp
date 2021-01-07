import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  @Output() isFormSubmitted = new EventEmitter<boolean>();
  @Output() userName = new EventEmitter<string>();

  feedbackForm = new FormGroup({
    'FullName': new FormControl(null, Validators.required),
    'Email': new FormControl(null, [Validators.required, Validators.email]),
    'PhoneNumber': new FormControl(null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    'YourMessage': new FormControl(null)
  });
  constructor() {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.feedbackForm.valid) {
      this.isFormSubmitted.emit(true);
      this.userName.emit(this.feedbackForm.value.FullName);
    }
  }
}
