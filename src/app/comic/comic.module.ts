import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComicComponent } from './comic.component';
import { ComicResolver } from './comic-resolver.service';
import { SharedModule } from '../shared';

const comicRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'comic/:num',
    component: ComicComponent,
    resolve: {
      comic: ComicResolver
    }
  }
]);

@NgModule({
  imports: [
    comicRouting,
    SharedModule
  ],
  declarations: [
    ComicComponent,
  ],

  providers: [
    ComicResolver
  ]
})
export class ComicModule {}
