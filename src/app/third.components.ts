import { Component } from '@angular/core';
import { BookData } from './BookData';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      Delete an Book by ID<br /><br /><br />
      ID:
      <input
        type="text"
        [(ngModel)]="id_deleted"
        placeholder="Input the Book ID"
        required
      />
      &nbsp;

      <input type="button" value="Delete" (click)="deleteBook()" />
      <br /><br />
      {{ errorMessage2 }}<Br /><br />
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
export class ThirdComponent {
  title = 'AngularOnline';
  // For displaying the book
  allBooks: BookData[] = new Array();
  errorMessage: string = '';

  // For deleting the book by ID
  id_deleted: string = '';
  errorMessage2: string = '';
  constructor(private dataService: DataService) {}

  deleteBook() {
    this.dataService.deleteBook(Number(this.id_deleted)).subscribe(
      (d: any) => {
        this.errorMessage2 = 'Delete operation was successful';
      },
      (err: any) => {
        this.errorMessage2 = 'Delete operation was unsuccessful';
      }
    );
  }
}
