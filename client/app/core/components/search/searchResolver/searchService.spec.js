import { SearchService } from './searchResolver.service';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

describe('SearchService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [],
            providers: [SearchService],
            schemas: []
        });
    });

    it('should call the Flickr API', async(inject([SearchService], fixture => {
        fixture.search('coffee').subscribe(response => {
            expect(response.status).toBe(200);
            expect(response.json().stat).toBe('ok');
        });
    })));

    it('should receive object with properties', async(inject([SearchService], fixture => {
        fixture.search('coffee').subscribe(response => {
            let container = response.json();
            expect(container.hasOwnProperty('photos')).toBe(true);

            let photos = container.photos;
            expect(photos.hasOwnProperty('photo')).toBe(true);

            let photo = photos.photo[0];
            expect(photo.hasOwnProperty('id')).toBe(true);
        });
    })));

    it('should pass the correct search term to the API', async(inject([SearchService], fixture => {
        fixture.search('coffee').subscribe(response => {
            expect(response.url).toContain('coffee');
        });
    })));
});
