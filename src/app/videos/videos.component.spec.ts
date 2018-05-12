import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosComponent } from './videos.component';
import { MatCardModule } from '@angular/material';

describe('VideosComponent', () => {
    let component: VideosComponent;
    let fixture: ComponentFixture<VideosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule],
            declarations: [VideosComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
