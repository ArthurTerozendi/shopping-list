import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/list.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lists: List[] = [];

  constructor(
    private router: Router,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.lists = this.databaseService.getAllLists();
  }

  openList(id?: number) {
    if (id) this.router.navigateByUrl(`${id}/list`)
  }

  createNewList() {
    let id: number = this.lists.length + 1;
    this.databaseService.saveList({ title: "Nova lista", items: [], id: id });
    this.openList(id);
  }

}
