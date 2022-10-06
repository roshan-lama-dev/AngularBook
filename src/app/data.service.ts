import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookData } from './BookData';

//This enables this services to be injected into many components
@Injectable()
export class DataService {
  //code

  private url: string = 'http://23864564.it.scu.edu.au/server/';
  constructor(private http: HttpClient) {
    //code
  }

  public getAllBooks(): Observable<BookData> {
    return this.http.get<BookData>(this.url);
  }
  public getBooksById(category_id: number): Observable<BookData> {
    return this.http.get<BookData>(this.url + category_id);
  }
  public deleteBook(book_id: number): Observable<BookData> {
    return this.http.delete<BookData>(this.url + book_id);
  }
  public updateBook(book_id: number, title: string): Observable<BookData> {
    return this.http.put<BookData>(this.url, {
      book_id: book_id,
      title: title,
    });
  }
  public insertBook(
    book_id: number,
    title: string,
    author: string,
    price: number,
    description: string,
    category_id: number
  ): Observable<BookData> {
    return this.http.post<BookData>(this.url, {
      book_id: book_id,
      title: title,
      author: author,
      price: price,
      description: description,
      category_id: category_id,
    });
  }
}
