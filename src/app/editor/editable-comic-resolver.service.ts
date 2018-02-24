import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Comic, ComicsService, UserService } from '../shared';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EditableComicResolver implements Resolve<Comic> {
  constructor(
    private comicsService: ComicsService,
    private router: Router,
    private userService: UserService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.comicsService.get(route.params['num'])
      .pipe(
        map(
          comic => {
            if (this.userService.getCurrentUser().email !== null && this.userService.getCurrentUser().email !== undefined) {
              return comic;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
