import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private http:HttpClient) {}

  url:string= 'http://localhost:3000/books';

  addBook(addBookForm: any): void {
    const formData = addBookForm.value;

    this.http.post(this.url, formData).subscribe(
      (response: any) => {
        console.log('Server Response:', response);
        console.log('Student Added Successfully');
        alert('Book Added Successfully');
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

}
