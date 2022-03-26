import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aux: any[] = [
    { title: "Lista 1", items: ["Item 1", "Item 2"], id: 1 },
    { title: "Lista 2", items: ["Item 1", "Item 2"], id: 2 },
    { title: "Lista 3", items: ["Item 1", "Item 2"], id: 3 },
    { title: "Lista 4", items: ["Item 1", "Item 2"], id: 4 },
    { title: "Lista 5", items: ["Item 1", "Item 2"], id: 5 },
    { title: "Lista 6", items: ["Item 1", "Item 2"], id: 6 }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openList(id: number) {
    this.router.navigateByUrl(`${id}/list`)
  }

}
