import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Comic, ComicsService, UserService } from '../shared';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ComicResolver implements Resolve<Comic> {
  constructor(
    private articlesService: ComicsService,
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.articlesService.get(route.params['slug'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
