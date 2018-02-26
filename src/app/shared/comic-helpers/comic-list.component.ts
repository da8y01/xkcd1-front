import { Component, Input } from '@angular/core';

import { Comic, ComicListConfig } from '../models';
import { ComicsService } from '../services';

@Component({
  selector: 'app-comic-list',
  styleUrls: ['comic-list.component.css'],
  templateUrl: './comic-list.component.html'
})
export class ComicListComponent {
  constructor (
    private comicsService: ComicsService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: ComicListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ComicListConfig;
  results: Comic[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }

    this.comicsService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.comics;
    });
  }
}
