import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-def-component',
  templateUrl: './def-component.component.html',
  styleUrls: ['./def-component.component.scss']
})
export class DefComponentComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  @Output() toggleHtml2Event  = new EventEmitter<void>();

  toggleHtml2() {
    this.toggleHtml2Event.emit();
  }
}


