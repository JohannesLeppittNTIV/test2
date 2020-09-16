import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

    const data=["johannes", "edin"]

    console.log(data[0])
    console.log(data[1])
  }

}
