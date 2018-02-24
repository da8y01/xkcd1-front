import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ComicListConfig, Profile } from '../shared';

@Component({
  selector: 'app-profile-comics',
  templateUrl: './profile-comics.component.html'
})
export class ProfileComicsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile;
  comicsConfig: ComicListConfig = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        this.comicsConfig = {
          type: 'all',
          filters: {}
        }; // Only method I found to refresh article load on swap
      }
    );
  }

}
