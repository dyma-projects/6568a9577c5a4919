import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  ngStyle = {
    width: '300px',
    height: '150px',
  };

  ngModel: string = 'green';

  setBackgroundToBlue() {
    this.ngModel = 'blue';
  }
}
