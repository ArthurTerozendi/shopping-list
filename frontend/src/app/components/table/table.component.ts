import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventResponse, TableInfo } from '../../list.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableInfo: TableInfo = { head: [], body: [] };
  @Output() editCellEvent: EventEmitter<EventResponse> = new EventEmitter<EventResponse>()

  constructor() { }
  edit: boolean[][] = [[false]];

  ngOnInit(): void {
    this.tableInfo.body.forEach(r => {
      let row: boolean[] = [];
      Object.values(r).forEach(c => row.push(false))
      this.edit.push(row);
    })
  }

  toggleCellEditing(row: number, column: number) {
    this.edit[row][column] = !this.edit[row][column];
  }

  onEditCell(row: number, column: number, value: string) {
    this.toggleCellEditing(row, column);
    this.tableInfo.body[row].column[column].name = value;
  }
  emitEvent(row: number, column: number, value: string) {
    this.editCellEvent.emit({ row: row, column: column, value: value });
  }
}
