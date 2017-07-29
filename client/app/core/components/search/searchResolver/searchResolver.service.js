import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { API_KEY } from '../../../../../../key';

@Injectable()
export class SearchService {
    baseAddress = 'https://api.flickr.com/services/rest/';
    method = 'flickr.photos.search';
    key = API_KEY;

    constructor(http: Http) {
        this.http = http;
    }

    search(searchTerm) {
        return this.http.get(
			`${this.baseAddress}?method=${this.method}&api_key=${this
				.key}&tags=${searchTerm}&format=json&nojsoncallback=1`
		);
    }
}
