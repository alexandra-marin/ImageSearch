import { SearchComponent } from './search.component';
import { SearchService } from './searchResolver/searchResolver.service';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('SearchComponent', () => {
    let subject;
    let subjectFixture;
    let subjectElement;
    let originalTimeout;

    beforeEach(async(() => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [FormsModule, ReactiveFormsModule, HttpModule],
            providers: [SearchService]
        })
        .overrideComponent(SearchComponent, {
            set: {
                styleUrls: []
            }
        })
        .compileComponents();

        let fixture = TestBed.createComponent(SearchComponent);

        subject = fixture.componentInstance;
        subjectElement = fixture.nativeElement;
        subjectFixture = fixture;
    }));

    describe('when searching for coffee', () => {
        beforeEach(async(() => {
            subject.search('coffee');
        TestBed.compileComponents();
        }));

        it('should display images', () => {
            subjectFixture.detectChanges();
            expect(subjectElement.innerHTML).toContain('<li>');
        });
    });

    afterEach(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});
