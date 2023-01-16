import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectorComponent } from './image-selector/image-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ImageSelectorComponent],
  declarations: [ImageSelectorComponent]
})
export class ImageModule { }
