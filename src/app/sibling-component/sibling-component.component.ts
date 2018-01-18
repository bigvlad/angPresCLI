import { Component, OnInit } from '@angular/core';
import { MsgServiceService } from '../msg-service.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'app-sibling-component',
  templateUrl: './sibling-component.component.html',
  styleUrls: ['./sibling-component.component.css']
})
export class SiblingComponentComponent implements OnInit {

  constructor(private missionService: MsgServiceService) { 
    missionService.missionAnnounced$.subscribe(
      mission => {
        console.log(mission);
    });

  }

  ngOnInit() {
  }

}
