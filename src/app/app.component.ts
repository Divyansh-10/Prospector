import { Component } from '@angular/core';
import { segment } from './interfaces/segment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

segmentVisibility: boolean = false;
tableVisibility: boolean = false;
currentSegment: String = "";
title = 'alore-project';

segments : segment[] = [

  {
    "name" : "divyansh",
    "emoji" : "😂", 
    "data": [{
      "name" : "test-1",
      "emoji": "😂"
    },{
      "name" : "test-2",
      "emoji": "😂"
    }]
  },
  {
    "name" : "Jason",
    "emoji" : "😂", 
    "data": [{
      "name" : "test-1",
      "emoji": "😂"
    },{
      "name" : "test-2",
      "emoji": "😂"
    }]
  }
]




  

  flipSegmentVisibility(){
    this.segmentVisibility = !this.segmentVisibility;
  }

  flipTableVisibility(){
    this.tableVisibility = !this.tableVisibility;
  }

  activateSegment(segmentName: String){
      this.flipTableVisibility();
      this.currentSegment = segmentName;
  }
  
}

