import { Component, ElementRef, OnInit,  ViewChild, AfterViewInit, Renderer2} from '@angular/core';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tableContent } from '../interfaces/table';


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit, AfterViewInit{

  
  
  @ViewChild('colorName')input: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('formValidity')formValidity: ElementRef | undefined;

  emojiMartVisibility: boolean = false;
  currentEmoji: any;
  currentColor: any = 'red';
  colorPalleteVisibility: boolean = false;
   
  colorPalette = [

    'rgba(207, 223, 255, 1)', 'rgba(156, 199, 255, 1)', 'rgba(45, 127, 249, 1)', 'rgba(0, 103, 255, 1)', 'rgba(0, 84, 209, 1)',
    
    'rgba(208, 240, 253, 1)', 'rgba(119, 209, 243, 1)', 'rgba(24, 191, 255, 1)', 'rgba(64, 131, 172, 1)', 'rgba(11, 118, 183, 1)',
    
    'rgba(194, 245, 233, 1)', 'rgba(114, 221, 195, 1)', 'rgba(32, 217, 210, 1)', 'rgba(123, 200, 195, 1)', 'rgba(6, 160, 155, 1)',
    
    'rgba(255, 179, 200, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 0, 73, 1)', 'rgba(218, 2, 64, 1)',
    
    'rgba(255, 227, 175, 1)', 'rgba(255, 214, 140, 1)', 'rgba(255, 197, 92, 1)', 'rgba(253, 178, 43, 1)', 'rgba(232, 149, 0, 1)',
    
    'rgba(255, 159, 242, 1)', 'rgba(254, 103, 233, 1)', 'rgba(246, 56, 220, 1)', 'rgba(255, 0, 220, 1)', 'rgba(214, 0, 184, 1)',
    
    'rgba(255, 181, 152, 1)', 'rgba(255, 158, 121, 1)', 'rgba(255, 120, 68, 1)', 'rgba(255, 71, 0, 1)', 'rgba(197, 55, 0, 1)',
    
    'rgba(175, 181, 255, 1)', 'rgba(142, 150, 255, 1)', 'rgba(107, 118, 255, 1)', 'rgba(49, 64, 255, 1)', 'rgba(0, 19, 255, 1)',
    
    'rgba(131, 204, 139, 1)', 'rgba(97, 199, 108, 1)', 'rgba(32, 201, 51, 1)', 'rgba(0, 181, 20, 1)', 'rgba(51, 138, 23, 1)',
    
    'rgba(238, 238, 238, 1)', 'rgba(204, 204, 204, 1)', 'rgba(172, 172, 172, 1)', 'rgba(102, 102, 102, 1)', 'rgba(68, 68, 68, 1)'
    
    ];
    
 
  constructor(
    private app: AppComponent,
    private renderer: Renderer2,
    
  ) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void{
   () => {
    if(this.tableForm.valid)
    this.renderer.setStyle(this?.formValidity?.nativeElement, 'background', '#0069D9');
   }
  }
  
  tableForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    icon : new FormControl(''),
    color : new FormControl('')
  })
  
  addEmoji(event: any){
    this.tableForm.patchValue({
      icon: event.emoji.native
    });

    this.currentEmoji = event.emoji.native;
    this.emojiMartVisibility = !this.emojiMartVisibility;
  }

  toggleEmojiMart(){
    this.emojiMartVisibility = !this.emojiMartVisibility;
  }
  
  toggleTable(){
    this.app.flipTableVisibility();
  }

  toogleColorPallete(){
    this.colorPalleteVisibility = !this.colorPalleteVisibility;
  }

  getColor(color: any){
    this.tableForm.patchValue({
      color: color
    });
    this.renderer.setStyle(this?.input?.nativeElement, 'background', color);
    this.colorPalleteVisibility = !this.colorPalleteVisibility;
  
  }

  onSubmit(){
    const tableData = this.tableForm.value;
    const currentSegment = this.app.currentSegment;
    console.log(currentSegment);

    const table: tableContent = {
        "name" : tableData.name,
        "emoji" : tableData.icon,
        "color" : tableData.color
    }

    
    this.app.segments.map((segment) => {
      if(segment.name === currentSegment){
        
      if(!segment.data){
        segment.data = new Array;
      }

      segment.data?.push(table);
     }
    })

  
    this.app.segments.map((segment) => {
      console.log(segment);
    })
    
    this.toggleTable();
  }

  addColor(colorItem: any){
    console.log(colorItem);
  }

}
