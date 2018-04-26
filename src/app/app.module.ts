import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { StoreComponent } from './store/store.component';

const appRoutes: Routes = [
    { path: 'videos', component: VideosComponent },
    { path: 'store', component: StoreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
