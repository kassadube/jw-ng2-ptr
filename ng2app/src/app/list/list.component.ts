import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = [
    {
      id: 1,
      name: "Arik"
    },
    {
      id: 2,
      name: "Aviel"
    }];

  constructor() { }

  ngOnInit() {
  }

}
