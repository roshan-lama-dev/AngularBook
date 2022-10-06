import { Component } from '@angular/core';
import { BookData } from './BookData';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="seconddiv">
      Click the display button to view the list of the books<br /><br />

      <div class="btn">
        <input type="button" value="Get the Book" (click)="getAllBooks()" />
      </div>
      <!-- {{ allBooks }} -->
    </div>
    <div class="show">
      <ul>
        <li *ngFor="let book of allBooks">
          Book ID: {{ book.book_id }},<br />
          Title: {{ book.title }},<br />
          Author: {{ book.author }}, <br />Price: {{ book.price }},<br />
          Description: {{ book.description }},<br />
          Category_Id:
          {{ book.category_id }}
        </li>
      </ul>
      <br /><br />
    </div>

    <footer class="footer">All right reserved.</footer>
    <style>
      .seconddiv {
        margin: 15px;
        text-align: center;
      }

      li {
        margin-bottom: 10px;
      }
    </style>
  `,
  styleUrls: ['./app.component.css'],
})
export class SecondComponent {
  title = 'AngularOnline';
  // For displaying the book
  allBooks: BookData[] = new Array();
  errorMessage: string = '';
  constructor(private dataService: DataService) {}
  getAllBooks() {
    this.dataService.getAllBooks().subscribe(
      (d: any) => {
        this.allBooks = d;
      },
      (err: any) => {
        console.log(err);
        this.errorMessage = 'Cannot retrieve the data';
      }
    );
  }
}
