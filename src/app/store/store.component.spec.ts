import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { MatCardModule, MatOptionModule, MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StoreComponent', () => {
    let component: StoreComponent;
    let fixture: ComponentFixture<StoreComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatCardModule,
                MatOptionModule,
                MatSelectModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule
            ],
            declarations: [StoreComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
