import { Component } from '@angular/core';

import { HEROES } from '../hero';
import { MsgServiceService } from '../msg-service.service';

@Component({
  selector: 'app-hero-parent',
  template: `
   <button (click)="announce()">Announce mission</button>
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
  history: string[] = [];
  miss:number=0;
  constructor(private missionService: MsgServiceService) {

  }

  announce() {

    this.miss++;
    this.missionService.announceMission(`Mission "${this.miss}" announced`);

  }
}