import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-pills',
  templateUrl: './nav-pills.component.html',
  styleUrls: ['./nav-pills.component.css']
})
export class NavPillsComponent implements OnInit {

  viewMode= 'map'; 

  courses =[
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
