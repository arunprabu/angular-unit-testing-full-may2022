import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public quoteList: any[] = [];
  public fetchedList: any[] = [];
  public quoteText = '';

  constructor(private service: QuoteService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data: any) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = '';
  }

  removeQuote(index: number) {
    this.service.removeQuote(index);
  }

}
