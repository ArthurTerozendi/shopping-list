import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.scss']
})
export class ListBoxComponent implements OnInit {

  @Input() title: string = "Sem título";
  @Input() items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
