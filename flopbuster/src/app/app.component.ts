import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wingCommandor  = {
    "title": "Wing Commandor",
    "years": 2000,
    "rating": 4.5
  };
  theRoom  = {
    "title": "The Room",
    "years": 2003,
    "rating": 3.5
  };

  rentalList = {
    count: 4,
    titles: "Cats, Howard the Duck, Jack and Jill, Batman and Robin"
  }

  addRental(movie: any) {
    this.rentalList.count++;
    this.rentalList.titles += ', ' + movie.title;
  }

  removeRental(movie: any) {
    this.rentalList.count--;
    this.rentalList.titles = this.rentalList.titles.replace(movie.title, '');
    this.rentalList.titles = this.rentalList.titles.replace(', ,', ',');
  }
  clearRentalList() {
    this.rentalList.count = 0;
    this.rentalList.titles = '';
  }
}
