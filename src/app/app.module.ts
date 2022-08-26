import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegmentFormComponent } from './segment-form/segment-form.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { TableFormComponent } from './table-form/table-form.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    SegmentFormComponent,
    TableFormComponent
  ],
  imports: [
    PickerModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
