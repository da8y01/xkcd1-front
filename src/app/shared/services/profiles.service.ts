import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Profile } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ProfilesService {
  constructor (
    private apiService: ApiService
  ) {}

  get(email: string): Observable<Profile> {
    return this.apiService.get('/profiles/' + email)
      .pipe(map((data: {profile: Profile}) => data.profile));
  }
}
