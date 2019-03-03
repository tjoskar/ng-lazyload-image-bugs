import { Component,  NgModule, Input } from '@angular/core';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

@Component({
  selector: 'app-viewer',
  template: '<img [defaultImage]="defaultImage" [lazyLoad]="image">',
  styleUrls: []
})
export class ViewerComponent {

  defaultImage = 'https://www.placecage.com/1000/1000';
  @Input() image: string;

}

@NgModule({
  exports: [ViewerComponent],
  declarations: [ViewerComponent],
  imports: [
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
})
export class ViewerModule { }
