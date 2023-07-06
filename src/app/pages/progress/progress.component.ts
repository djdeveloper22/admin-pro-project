import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progress1: number = 3;
  progress2: number = 7;

  get getProgress1(){
    return `${this.progress1}%`
  }
  get getProgress2(){
    return `${this.progress2}%`
  }

}
