import { Component, Input } from '@angular/core';
import { FavoriteChangedEventArgs } from './fav-button/fav-button.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  viewMode= 'map'; 

  courses =[
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  title = 'project-Z';

  post = {
    isClicked: true,
  };
  
  

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }


}
