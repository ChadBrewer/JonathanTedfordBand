import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
} from "@angular/material";
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
  ],
  imports: [
    BrowserModule,
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
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }
}
