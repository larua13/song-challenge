import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../services/progress.service';
import { Challenge } from '../shared/data/menu.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private progressService: ProgressService) {}
  progress: Challenge[];
  defaultElevation = 2;
  raisedElevation = 8;
  finish = false;
  clue = false;
  clue2 = false;
  clue3 = false;
  interval: NodeJS.Timeout;
  interval2: NodeJS.Timeout;
  interval3: NodeJS.Timeout;

  ngOnInit() {
    this.progress = this.progressService.getAllProgress();
    const notResolve = this.progress.find(
      (progress) => progress.resolve === false
    );
    if (!notResolve) {
      this.finish = true;
      this.interval = setInterval(() => {
        this.clue = true;
      }, 120000);
      this.interval2 = setInterval(() => {
        this.clue2 = true;
      }, 240000);
      this.interval3 = setInterval(() => {
        this.clue3 = true;
      }, 360000);
    }
  }

  OnDestroy(){
    clearInterval(this.interval);
    clearInterval(this.interval2);
    clearInterval(this.interval3);
  }

  restart() {
    this.progressService.restart();
    window.location.reload();
    clearInterval(this.interval);
    clearInterval(this.interval2);
    clearInterval(this.interval3);
  }
}
