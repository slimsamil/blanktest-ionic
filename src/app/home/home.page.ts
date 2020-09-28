import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = '';
  namelist: any = this.getNames();

  constructor(public storage: Storage) {
    
  }

  add() {
    if (this.name.length > 0) {
      let task = this.name;
      this.namelist.push(task);
      this.storage.set('namelist', JSON.stringify(this.namelist));
      this.name = '';
    }
  }

  delete(index) {
    this.namelist.splice(index, 1);
    this.storage.set('namelist', JSON.stringify(this.namelist));
    
  }

  getNames(): Promise<any> {
    let namelist = this.storage.get('namelist');
    return namelist;
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

