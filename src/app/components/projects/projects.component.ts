import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import projectsData from '../../../data/projets.json';
import { ProjectCardComponent } from '../project-card/project-card.component';

// Types
type MediaType = 'image' | 'video';

interface MediaItem {
  type: MediaType;
  url: string;
}

interface Project {
  title: string;
  description: string[] | string;
  details: string[];
  skills: string[];
  media: {
    main: MediaItem;
    gallery: MediaItem[];
  };
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = (projectsData as any[]).map((p) => ({
    title: p.title,
    description: p.description,
    details: p.details ?? [],
    skills: p.skills ?? [],
    media: {
      main: p.media.main,
      gallery: p.media.gallery ?? []  // <-- Résout l'erreur de type radicalement
    }
  }));
}
