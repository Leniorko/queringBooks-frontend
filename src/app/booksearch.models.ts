export interface SearchResult {
  totalItems: number | null;
  nextIndex: number | null;
  items: Array<{ id: string | null }>;
}

export interface Book {
  id: string | null;
  volumeInfo: BookInfo;
}

export interface BookInfo {
  title: string | null;
  authors: Array<string | null> | null;
  description: string | null;
  pageCount: number | null;
  categories: Array<string | null> | null;
  imageLinks: BookImgs;
  previewLink: String | null;
}

export interface BookImgs {
  smallThumbnail: string | null;
  thumbnail: string | null;
  small: string | null;
  medium: string | null;
  large: string | null;
  extraLarge: string | null;
}
