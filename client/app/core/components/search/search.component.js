import { Component } from '@angular/core';
import { SearchService } from './searchResolver/searchResolver.service';

import template from './search.template.html';
@Component({
    selector: 'search',
    template: template,
    styleUrls: ['../../../../css/search.css']
})
export class SearchComponent {
    searchTerm = 'hello';

    constructor(service: SearchService) {
        this.http = service;
        this.search(this.searchTerm);
    }

    search(searchTerm) {
        this.http.search(searchTerm).subscribe(response => {
            this.photos = response.json().photos.photo;
        });
    }

    setSelectedImage(image) {
        this.selectedImage = image;
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }
}
