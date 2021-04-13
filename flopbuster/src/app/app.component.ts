import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster';
  movies = [
    {
      voteCount1: 0,
      poster1Img: 'assets/posters/Kriket.jpg',
      hideBtn1: false,
      btn1Text: 'Vote',
      chosen: false
    },
    {
      voteCount2: 0,
      poster2Img: 'assets/posters/LOR.jpg',
      hideBtn2: false,
      btn2Text: 'Vote'
    },
    {
      voteCount3: 0,
      poster3Img: 'assets/posters/namaste_london.jpg',
      hideBtn3: false,
      btn3Text: 'Vote'
    },
    {
      voteCount4: 0,
      poster4Img: 'assets/posters/tubelight.jpg',
      hideBtn4: false,
      btn4Text: 'Vote'
    }
  ];
  onclick(movieClicked : Object) {
    if(movieClicked.hasOwnProperty('btn1Text')) {
      if( this.movies[0].btn1Text === 'Vote') {
        this.movies[0].btn1Text = 'Unvote';
        this.movies[0].chosen = true;
        this.movies[0].voteCount1 = 1;
        this.movies[1].hideBtn2 = true;
        this.movies[2].hideBtn3 = true;
        this.movies[3].hideBtn4 = true;
      } else {
      this.movies[0].btn1Text = 'Vote';
      this.movies[0].voteCount1 = 0;
      this.movies[1].hideBtn2 = false;
      this.movies[2].hideBtn3 = false;
      this.movies[3].hideBtn4 = false;
      this.movies[0].chosen = false;
      }
    }
  }
}
