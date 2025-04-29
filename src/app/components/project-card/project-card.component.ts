import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type MediaType = 'image' | 'video';

interface MediaItem {
  type: MediaType;
  url: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() description: string[] | string = [];
  @Input() details: string[] = [];
  @Input() skills: string[] = [];

  @Input() media!: {
    main: MediaItem;
    gallery: MediaItem[];
  };

  showGallery = false;
  currentIndex = 0;

  get formattedDescription(): string[] {
    return Array.isArray(this.description) ? this.description : [this.description];
  }

  openGallery(index = 0) {
    this.currentIndex = index;
    this.showGallery = true;
  }

  closeGallery() {
    this.showGallery = false;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.media.gallery.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.media.gallery.length) % this.media.gallery.length;
  }
}
