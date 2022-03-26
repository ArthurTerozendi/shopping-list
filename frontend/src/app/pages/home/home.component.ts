import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aux: any[] = [{ title: "Lista 1", items: ["Item 1", "Item 2"] }, { title: "Lista 2", items: ["Item 1", "Item 2"] }, { title: "Lista 3", items: ["Item 1", "Item 2"] }, { title: "Lista 4", items: ["Item 1", "Item 2"] }, { title: "Lista 5", items: ["Item 1", "Item 2"] }, { title: "", items: ["Item 1", "Item 2"] }]

  constructor() { }

  ngOnInit(): void {
  }

}
