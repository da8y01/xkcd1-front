import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ComicListComponent, ComicMetaComponent, ComicPreviewComponent } from './comic-helpers';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ComicListComponent,
    ComicMetaComponent,
    ComicPreviewComponent,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    ComicListComponent,
    ComicMetaComponent,
    ComicPreviewComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
