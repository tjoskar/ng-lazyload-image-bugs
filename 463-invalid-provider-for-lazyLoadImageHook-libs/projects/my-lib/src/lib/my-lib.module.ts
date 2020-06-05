import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [MyLibComponent],
  imports: [
    LazyLoadImageModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
