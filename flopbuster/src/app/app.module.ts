import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { CartComponent } from './cart/cart.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { FlopVotesComponent } from './flop-votes/flop-votes.component';
import { RentalCartComponent } from './rental-cart/rental-cart.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { RentalListComponent } from './rental-list/rental-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    CartComponent,
    MovieDisplayComponent,
    FlopVotesComponent,
    RentalCartComponent,
    MovieTileComponent,
    RentalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
