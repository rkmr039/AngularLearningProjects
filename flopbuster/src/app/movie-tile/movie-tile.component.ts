import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() movie: any;

  @Output() rentalEvent = new EventEmitter();

  @Output() removeRentalEvent = new EventEmitter();

  addRental() {
    this.rentalEvent.emit(this.movie);
  }

  removeRental() {
    this.removeRentalEvent.emit(this.movie);
  }



}
