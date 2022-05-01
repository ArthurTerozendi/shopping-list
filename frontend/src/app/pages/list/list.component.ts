import { Component, OnInit } from '@angular/core';
import { TableInfo } from 'src/app/components/table/table-info.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title: string = "Sem título";

  tableInfo: TableInfo = {
    head: [
      { name: "Nome 1" },
      { name: "Nome 2" },
      { name: "Nome 3" },
      { name: "Nome 4" },
      { name: "Nome 5" }
    ],
    bodyRow: [
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
      {
        bodyInfo: [
          { name: "Conteudo 1" },
          { name: "Conteudo 2" },
          { name: "Conteudo 3" },
          { name: "Conteudo 4" },
          { name: "Conteudo 5" }
        ]
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  onEvent(event: any) {
    console.log(event);
    
  }
}
