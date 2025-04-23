import { Component } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
