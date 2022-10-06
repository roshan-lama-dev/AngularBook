export class BookData {
  book_id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  category_id: number;

  constructor(
    i: number,
    t: string,
    a: string,
    p: number,
    d: string,
    c: number
  ) {
    this.book_id = i;
    this.title = t;
    this.author = a;
    this.price = p;
    this.description = d;
    this.category_id = c;
  }
}
