import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ImageComponent } from './image.component';

@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [ImageComponent]
})
export class ImageModuleModule { }
