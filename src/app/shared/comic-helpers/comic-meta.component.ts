import { Component, Input } from '@angular/core';

import { Comic } from '../models';

@Component({
  selector: 'app-comic-meta',
  templateUrl: './comic-meta.component.html'
})
export class ComicMetaComponent {
  @Input() comic: Comic;
}
