import { Component, Input, OnInit } from '@angular/core';
import { TableInfo } from './table-info.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableInfo: TableInfo = { head: [], bodyRow: [] };

  constructor() { }

  ngOnInit(): void {
  }

}
