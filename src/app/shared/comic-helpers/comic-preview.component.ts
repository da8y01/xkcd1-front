import { Component, Input } from '@angular/core';

import { Comic } from '../models';

@Component({
  selector: 'app-comic-preview',
  templateUrl: './comic-preview.component.html'
})
export class ComicPreviewComponent {
  @Input() comic: Comic;
}
