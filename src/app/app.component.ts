import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: MenuItem[];
  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
    this.items = [
      { label: 'Employee', url: 'employee' },
      { label: 'Projects', url: 'projects' }
    ];
  }
}
