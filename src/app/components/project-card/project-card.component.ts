import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() media = '';
  @Input() type: 'image' | 'video' = 'image';

  @Input() description: string[] | string = [];
  get formattedDescription(): string[] {
    return Array.isArray(this.description) ? this.description : [this.description];
  }

  @Input() details: string[] = [];
  @Input() skills: string[] = [];
}
