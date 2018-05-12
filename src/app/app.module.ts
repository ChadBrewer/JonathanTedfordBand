import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VideosListComponent } from './main/videos-list/videos-list.component';
import { VideosPlaylistComponent } from './main/videos-playlist/videos-playlist.component';
import { VideosSearchComponent } from './main/videos-search/videos-search.component';
import { VideoPlayerComponent } from './main/video-player/video-player.component';
// Services
import { YoutubeApiService } from './shared/services/youtube-api.service';
import { YoutubePlayerService } from './shared/services/youtube-player.service';
import { PlaylistStoreService } from './shared/services/playlist-store.service';
import { NotificationService } from './shared/services/notification.service';
import { BrowserNotificationService } from './shared/services/browser-notification.service';
// Pipes

import { VideoDurationPipe } from './shared/pipes/video-duration.pipe';
import { VideoLikesViewsPipe } from './shared/pipes/video-likes-views.pipe';
import { VideoNamePipe } from './shared/pipes/video-name.pipe';
import { LazyScrollDirective } from './shared/directives/lazy-scroll/lazy-scroll.directive';
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconRegistry,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    { path: 'videos', component: VideosComponent },
    { path: 'store', component: StoreComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    StoreComponent,
    HomeComponent,
    VideosListComponent,
    VideosSearchComponent,
    VideoPlayerComponent,
    VideosPlaylistComponent,
    VideoDurationPipe,
    VideoLikesViewsPipe,
    VideoNamePipe,
    LazyScrollDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    ),
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [
    MatIconRegistry,
    YoutubeApiService,
    YoutubePlayerService,
    PlaylistStoreService,
    NotificationService,
    BrowserNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }
}
