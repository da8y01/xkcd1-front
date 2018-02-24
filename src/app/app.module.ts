import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComicModule } from './comic/comic.module';
import { AuthModule } from './auth/auth.module';
import { EditorModule } from './editor/editor.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import {
  ApiService,
  ComicsService,
  AuthGuard,
  HeaderComponent,
  JwtService,
  ProfilesService,
  SharedModule,
  UserService,
  HttpTokenInterceptor
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ComicModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    ComicsService,
    AuthGuard,
    JwtService,
    ProfilesService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
