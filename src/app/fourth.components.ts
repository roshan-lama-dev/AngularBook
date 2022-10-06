import { Component } from '@angular/core';
import { BookData } from './BookData';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      Update the Book<br /><br /><br /><br />
      ID:
      <input
        type="text"
        [(ngModel)]="id_updated"
        placeholder="Input the Book ID"
      />
      &nbsp;<br />
      New <Title></Title>:
      <input
        type="text"
        [(ngModel)]="title_updated"
        placeholder="Input the new book title"
      />
      &nbsp;
      <input type="button" value="Update Book" (click)="updateBook()" /><Br />
      {{ errorMessage3 }}<Br /><br />
    </div>

    <style>
      .center {
        margin-top: 30px;
        text-align: center;
      }
    </style>
  `,
  styleUrls: ['./app.component.css'],
})
export class FourthComponent {
  title = 'AngularOnline';
  // For displaying the book
  allBooks: BookData[] = new Array();
  errorMessage: string = '';
  constructor(private dataService: DataService) {}
  id_updated: string = '';
  title_updated: string = '';
  errorMessage3: string = '';

  updateBook() {
    this.dataService
      .updateBook(Number(this.id_updated), this.title_updated)
      .subscribe(
        (d: any) => {
          this.errorMessage3 = 'Update operation was successful';
        },
        (err: any) => {
          this.errorMessage3 = 'Update operation was unsuccessful';
        }
      );
  }
}
