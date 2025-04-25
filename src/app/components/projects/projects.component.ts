import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import projectsData from '../../../data/projets.json';
import { ProjectCardComponent } from '../project-card/project-card.component';

type ProjectType = 'image' | 'video';

interface Project {
  title: string;
  description: string[] | string;
  media: string;
  type: ProjectType;
  details?: string[];
  skills?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = (projectsData as Project[]).map(p => ({
    ...p,
    type: p.type as ProjectType
  }));
}
