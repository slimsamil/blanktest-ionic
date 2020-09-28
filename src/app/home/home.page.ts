import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = '';

  namelist = Array<string>();

  constructor(public storage: Storage) {
    this.getDataLocalStorage();
  }

  add() {
    if (this.name.length > 0) {
      let task = this.name;
      this.namelist.push(task);
      this.name = '';
    }
    this.updateLocalStorage();
  }

  delete(index) {
    this.namelist.splice(index, 1);
    this.updateLocalStorage();

  }

  updateLocalStorage() {
    localStorage.setItem('namelist', JSON.stringify(this.namelist));
  }

  getDataLocalStorage() {
    try {
      const test = localStorage.getItem('namelist');
      this.namelist = JSON.parse(test);
    } catch (error) {
      console.log(error);
    }
  }
}
/*add() {
    if (this.name.length > 0) {
      let name = this.name;
      this.namelist.push(name);
      this.storage.set('namelist', JSON.stringify(this.namelist));
      this.name = '';
    }
  }

  add(name:any):void {
    if (this.name.length > 0) {
      let name = this.name;
      this.storage.set('username',name);
      this.name = '';
    }
    let namelist = this.storage.get('namelist');
    if (namelist) {
      namelist.push(name);
      this.storage.set('namelist', namelist);
    } else {
      namelist = [];
      namelist.push(name);
      this.storage.set('favorites', namelist);
    }}

  delete(index) {
    this.namelist.splice(index, 1);
    this.storage.set('namelist', JSON.stringify(this.namelist));
  }

   */
