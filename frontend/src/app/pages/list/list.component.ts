import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/list.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: List = { title: "", items: {head: [], body: []} };

  constructor(
    private activatedRoute: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.list = this.databaseService.getListById(id);
  }

  onEvent(event: any) {
    console.log(event);
  }
}
