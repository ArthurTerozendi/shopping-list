import { Injectable } from '@angular/core';
import { List } from '../list.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getListById(id: number): List {
    let lists = this.getAllLists();
    return lists.find(l => l.id == id) || { title: "", items: {head: [], body: []} };
  }

  getAllLists(): List[] {
    let lists = localStorage.getItem("lists");
    return lists ? JSON.parse(lists) : [];
  }

  saveList(list: List): List {
    let lists: List[] = this.getAllLists();
    let id = lists.length + 1;
    list.id = id;
    if (lists) lists.push(list);
    this.saveInLocalStorage(lists);
    return lists.find(l => l.id == id) || { title: "", items: {head: [], body: []} };
  }

  updateList(list: List, id: number): List {
    let lists = this.getAllLists();
    lists.forEach(l => { if (l.id == id) l = list; l.id = id });
    this.saveInLocalStorage(lists);
    return lists.find(l => l.id == id) || { title: "", items: {head: [], body: []} };
  }

  removeList(id: number): List[] {
    let lists = this.getAllLists();
    let index = lists.findIndex(l => l.id == id);
    lists.splice(index, 1);
    this.saveInLocalStorage(lists);
    return lists;
  }

  saveInLocalStorage(lists: List[]) {
    if (lists) localStorage.setItem("lists", JSON.stringify(lists))
  }
}
