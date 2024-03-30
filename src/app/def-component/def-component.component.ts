import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-def-component',
  templateUrl: './def-component.component.html',
  styleUrls: ['./def-component.component.scss']
})
export class DefComponentComponent implements OnInit {
  
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    })
  }



  ngOnInit(): void {
  }
  @Output() toggleHtml2Event  = new EventEmitter<void>();

  toggleHtml2() {
    this.toggleHtml2Event.emit();
  }

  onLogin() {
    console.log(this.loginForm.value);
  }
}


