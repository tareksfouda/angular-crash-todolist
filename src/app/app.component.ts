import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarek\'s land';

  constructor() {
    this.changeTitle('Changed Title');
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}
