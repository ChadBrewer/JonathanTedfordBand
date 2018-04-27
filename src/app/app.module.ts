import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
    ),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
