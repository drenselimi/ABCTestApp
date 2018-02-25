import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Employee', icon: 'fa-user', url: 'employee' },
      { label: 'Projects', icon: 'fa-book', url: 'projects' }
    ];
  }

}
