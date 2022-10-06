import { Component } from '@angular/core';
import { BookData } from './BookData';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: ` <div class="center">
      Insert Book<br /><br /><br /><br />
      Book ID:
      <input type="text" [(ngModel)]="id_new" placeholder="Input the Book ID" />
      &nbsp;<br />
      Title:
      <input
        type="text"
        [(ngModel)]="title_new"
        placeholder="Input the book's title"
      />
      &nbsp;<br />
      Author:
      <input
        type="text"
        [(ngModel)]="author_new"
        placeholder="Input the author's name"
      />
      &nbsp;<br />
      Price:
      <input
        type="text"
        [(ngModel)]="price_new"
        placeholder="Input the book's price"
      />
      &nbsp; Description:
      <input
        type="text"
        [(ngModel)]="description_new"
        placeholder="Input the book's description"
      />
      &nbsp; Category ID:
      <input
        type="text"
        [(ngModel)]="category_id_new"
        placeholder="Input the book's Category ID"
      />
      &nbsp; <input type="button" value="Insert" (click)="insertBook()" /><Br />
      {{ errorMessage4 }}<Br /><br />
    </div>

    <style>
      .center {
        margin-top: 30px;
        text-align: center;
      }
    </style>`,
  styleUrls: ['./app.component.css'],
})
export class FifthComponent {
  title = 'AngularOnline';
  // For displaying the book
  allBooks: BookData[] = new Array();
  errorMessage: string = '';

  id_new: string = '';
  title_new: string = '';
  author_new: string = '';
  price_new: string = '';
  description_new: string = '';
  category_id_new: string = '';
  errorMessage4: string = '';
  constructor(private dataService: DataService) {}
  insertBook() {
    this.dataService
      .insertBook(
        Number(this.id_new),
        this.title_new,
        this.author_new,
        Number(this.price_new),
        this.description_new,
        Number(this.category_id_new)
      )
      .subscribe(
        (d: any) => {
          this.errorMessage4 = 'Insertion operation was successful';
        },
        (err: any) => {
          this.errorMessage4 = 'Insertion operation was unsuccessful';
        }
      );
  }
}
