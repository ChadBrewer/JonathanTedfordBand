import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './videos/videos.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
    { path: 'videos', component: VideosComponent },
    { path: 'store', component: StoreComponent },
    { path: '', component: HomeComponent }
];

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatButtonModule,
                MatToolbarModule,
                MatIconModule,
                MatGridListModule,
                MatCardModule,
                MatFormFieldModule,
                MatSelectModule,
                MatInputModule,
                BrowserModule,
                RouterModule.forRoot(
                    appRoutes,
                    { enableTracing: false }
                ),
                HttpClientModule,
                FormsModule,
                BrowserAnimationsModule
            ],
            declarations: [
                AppComponent,
                VideosComponent,
                StoreComponent,
                HomeComponent
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('The Jonathan Tedford Band');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('The Jonathan Tedford Band');
    }));
});
