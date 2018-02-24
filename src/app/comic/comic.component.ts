import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Comic,
  ComicsService,
  User,
  UserService
} from '../shared';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic.component.html'
})
export class ComicComponent implements OnInit {
  comic: Comic;
  currentUser: User;
  canModify: boolean;
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private comicsService: ComicsService,
    private router: Router,
    private userService: UserService,
  ) {
    console.log('ComicComponent1')    
  }

  ngOnInit() {
    console.log('ComicComponent')
    // Retreive the prefetched article
    this.route.data.subscribe(
      (data: { comic: Comic }) => {
        this.comic = data.comic;
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.email !== null && this.currentUser.email !== undefined);
      }
    );
  }

  deleteComic() {
    this.isDeleting = true;

    this.comicsService.destroy(this.comic.num)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }
}
