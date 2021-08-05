import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

  export interface FavoriteChangedEventArgs {
    newValue : boolean;
  }

@Component({
  selector: 'fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class FavButtonComponent implements OnInit {


  @Input('is-favorite') 
  isClicked!: boolean;
  
  
  @Output() change = new EventEmitter()


  ngOnInit(): void {
  }

  onClick() {
    this.isClicked = !this.isClicked;
    this.change.emit({ newValue: this.isClicked });
  }




}
