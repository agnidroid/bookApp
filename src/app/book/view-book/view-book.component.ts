import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Book } from '../book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {

  url:string= 'http://localhost:3000/books';
  books: Book[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.url).subscribe((data) => {
      this.books = data;
    });

    console.log(this.books);
  }


  deleteBook(bookId: number): void {
    const deleteUrl = `${this.url}/${bookId}`;

    this.http.delete(deleteUrl).subscribe(
      () => {
        alert('Book Deleted Successfully');
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}
