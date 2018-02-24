import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Comic, ComicsService } from '../shared';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  comic: Comic = {} as Comic;
  comicForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private comicsService: ComicsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.comicForm = this.fb.group({
      month: '',
      num: '',
      link: '',
      year: '',
      news: '',
      safe_title: '',
      transcript: '',
      alt: '',
      img: '',
      title: '',
      day: ''
    });
    // Optional: subscribe to value changes on the form
    // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
  }

  ngOnInit() {
    // If there's an article prefetched, load it
    this.route.data.subscribe(
      (data: {comic: Comic}) => {
        if (data.comic) {
          this.comic = data.comic;
          this.comicForm.patchValue(data.comic);
        }
      }
    );
  }

  submitForm() {
    this.isSubmitting = true;
    this.updateComic(this.comicForm.value);
    this.comicsService
    .save(this.comic)
    .then(
      comic => {
        this.router.navigateByUrl('/');
      }
    );
  }

  updateComic(values: Object) {
    Object.assign(this.comic, values);
  }
}
