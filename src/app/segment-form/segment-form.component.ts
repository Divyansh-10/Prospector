import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { segment } from '../interfaces/segment';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-segment-form',
  templateUrl: './segment-form.component.html',
  styleUrls: ['./segment-form.component.css']
})
export class SegmentFormComponent implements OnInit {
  
  emojiMartVisibility: boolean = false;
  currentEmoji: any;

  constructor(
    private app: AppComponent
  ) { }

  ngOnInit(): void {
  }
  
  segmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    icon: new FormControl(''),
    description: new FormControl('')
  });
  
  addEmoji(event: any){
    this.segmentForm.patchValue({
      icon : event.emoji.native
    });

    this.currentEmoji = event.emoji.native;
    this.emojiMartVisibility = !this.emojiMartVisibility;
  }

  setEmoji(event: any){
    this.emojiMartVisibility = !this.emojiMartVisibility;
  }

  onSubmit() {
    const segmentData = this.segmentForm.value;

    const segment: segment = {
        "name" : segmentData.name,
        "emoji" : segmentData.icon,
        "description" : segmentData.description
    }

    this.app.segments.push(segment);
    this.app.segmentVisibility = false;
  }

  toggleSegmentForm(){
    this.app.segmentVisibility = false;
  }



}
