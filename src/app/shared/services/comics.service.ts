import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Comic, ComicListConfig } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class ComicsService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: ComicListConfig): Observable<{comics: Comic[], comicsCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/comic' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams(params)
    );
  }

  get(num): Observable<Comic> {
    return this.apiService.get('/comic/' + num)
      .pipe(map(data => data.article));
  }

  destroy(num) {
    return this.apiService.delete('/comic/' + num);
  }

  save(comic): Observable<Comic> {
    // If we're updating an existing article
    if (comic.num) {
      return this.apiService.put('/comic/' + comic.num, {comic: comic})
        .pipe(map(data => data.comic));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/comic/', {comic: comic})
        .pipe(map(data => data.comic));
    }
  }
}
