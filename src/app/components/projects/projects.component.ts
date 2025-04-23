import { Component } from '@angular/core';
import projectsData from '../../../data/projets.json';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  media: string;
  type: 'image' | 'video';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = projectsData as Project[];

}
