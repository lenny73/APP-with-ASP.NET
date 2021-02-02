import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class PageService {

    constructor(private http: HttpClient) { }

    public pagesBS = new BehaviorSubject<Object>(null);

    getPages() {
        return this.http.get('https://localhost:44362/api/pages');
    }

    getPage(slug) {
        return this.http.get('https://localhost:44362/api/pages/' + slug);
    }

    postAddPage(value) {
        return this.http.post('https://localhost:44362/api/pages/create', value);
    }

    getEditPage(id) {
        return this.http.get('https://localhost:51856/api/pages/edit/' + id);
    }

    putEditPage(value) {
        return this.http.put('https://localhost:51856/api/pages/edit/' + value.id, value);
    }
    deletePage(id) {
        return this.http.delete('https://localhost:51856/api/pages/delete/' + id);
    }


}
