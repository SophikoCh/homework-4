import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework-4';
  showHtml2: boolean = false;

  toggleHtml2() {
    this.showHtml2 = !this.showHtml2;
  }
}