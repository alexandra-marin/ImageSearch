import { SearchComponent } from './search.component';
import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

describe('SearchComponent', () => {
    let searchComponent;
    let mockHttp;

    beforeEach(() => {
        let payload = { photos: { photo: [] } };
        let responseData = new ResponseOptions();
        responseData.body = JSON.stringify(payload);
        let response = Observable.of(new Response(responseData));

        mockHttp = jasmine.createSpyObj('mockHttp', ['search']);
        mockHttp.search.and.returnValue(response);

        searchComponent = new SearchComponent(mockHttp);
    });

    it('should call the Flickr API when search button is clicked', () => {
        searchComponent.search('coffee');
        expect(mockHttp.search).toBeDefined();
        expect(mockHttp.search).toHaveBeenCalledWith('coffee');
    });
});
