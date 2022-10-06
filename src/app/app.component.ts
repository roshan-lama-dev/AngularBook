import { Component } from '@angular/core';
import { BookData } from './BookData';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `<br /><br />

    <div class="herosection">
      <div class="hero-content">
        <h1>Welcome to Online Book Store</h1>
        <hr />
        <p>Please select the option below to view and edit the book list</p>
      </div>
    </div>
    <div class="nav">
      <a routerLink="/second"> View Book</a>
      <a routerLink="/third"> Delete Book</a>
      <a routerLink="/fourth"> Update Book</a>
      <a routerLink="/fifth"> Insert Book</a>
    </div>

    <!-- To display the content -->
    <router-outlet></router-outlet>
    <br /><br />

    <footer class="footer">All right reserved.</footer>

    <style>
      .title {
        text-align: center;
        color: rebeccapurple;
      }

      .nav {
        display: flex;
        font-size: 2rem;
        justify-content: center;
      }

      .herosection {
        background: url(src/assets/images/mainimage.jpg) no-repeat center center;
        background-size: cover;
        min-height: 80vh;

        display: flex;
        justify-content: center;
        align-items: center;
      }
      .hero-content {
        background: rgba(255, 255, 255, 0.26);
        text-align: center;
        color: rgb(0, 0, 0);
        width: auto;
        backdrop-filter: blur(3px);
        padding: 10px 20px;
        border-radius: 10px;
        /*  */
        box-shadow: 5px 10px 10px black;
      }
      .nav > a {
        text-decoration: none;
        color: black;

        margin-right: 35px;
      }
      .nav > a:hover {
        text-decoration: none;
        color: blue;

        margin-right: 35px;
      }

      .footer {
        text-align: center;
        color: white;
        background: black;
        padding: 3rem;
      }
    </style>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularOnline';
  // For displaying the book
  allBooks: BookData[] = new Array();
  errorMessage: string = '';

  // For deleting the book by ID
  id_deleted: string = '';
  errorMessage2: string = '';

  id_updated: string = '';
  title_updated: string = '';
  errorMessage3: string = '';

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
