import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, SearchResult } from './booksearch.models';

@Injectable({
  providedIn: 'root',
})
export class SearchBooksService {
  constructor(private http: HttpClient) {}

  performSearchQuery(
    searchArg: String,
    startIndex: number = 0,
    itemsLimit: number = 30
  ) {
    const url = new URL('https://quering-books.herokuapp.com/search');
    url.searchParams.set('q', searchArg.toString());
    url.searchParams.set('startIndex', startIndex.toString());
    url.searchParams.set('itemsLimit', itemsLimit.toString());

    return this.http.get<SearchResult>(url.toString());
  }

  performBookQuery(bookID: String) {
    const url = new URL('https://quering-books.herokuapp.com/book');
    url.searchParams.set('bookID', bookID.toString());

    return this.http.get<Book>(url.toString());
  }
}
