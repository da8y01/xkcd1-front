import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComicsComponent } from './profile-comics.component';
import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { SharedModule } from '../shared';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:email',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    children: [
      {
        path: '',
        component: ProfileComicsComponent
      },
      {
        path: 'favorites',
        component: ProfileFavoritesComponent
      }
    ]
  }
]);

@NgModule({
  imports: [
    profileRouting,
    SharedModule
  ],
  declarations: [
    ProfileComicsComponent,
    ProfileComponent,
    ProfileFavoritesComponent
  ],

  providers: [
    ProfileResolver
  ]
})
export class ProfileModule {}
