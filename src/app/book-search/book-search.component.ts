import { Component, OnInit } from '@angular/core';
import { Book, SearchResult } from '../booksearch.models';
import { SearchBooksService } from '../search-books.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  searchQuery = '';
  loadMoreQuery = '';
  searchedBooks: Array<Book> = [];
  nextIndex = 0;
  searchResult: SearchResult | undefined;

  constructor(private searchService: SearchBooksService) {}

  ngOnInit(): void {}

  performSearch(query: string) {
    this.searchService.performSearchQuery(query).subscribe((data) => {
      this.searchResult = data;
      this.nextIndex = +data.nextIndex;
      this.loadMoreQuery = query;
      this.searchedBooks = [];

      this.performBookSearch();
    });
  }

  private performBookSearch() {
    for (const [index, bookID] of this.searchResult?.items.entries()!!) {
      this.searchService.performBookQuery(bookID.id!).subscribe((data) => {
        this.searchedBooks?.push(data);
      });
    }
  }

  loadMore() {
    this.searchService
      .performSearchQuery(this.loadMoreQuery, this.nextIndex)
      .subscribe((data) => {
        this.searchResult = data;
        this.nextIndex = +data.nextIndex;

        this.performBookSearch();
      });
  }
}
