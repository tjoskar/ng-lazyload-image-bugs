import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img class="img-fluid to-image" [errorImage]="fallback" [defaultImage]="defaultImage" [lazyLoad]="path" [alt]="alt" (error)="doFallback()" />
  `
})
export class AppComponent {
  fallback = 'http://placekitten.com/1000/1000';
  defaultImage = 'https://www.placecage.com/1000/1000';
  path = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  alt = 'Some alt text';

  doFallback() {
    console.error('No!!!!');
  }
}
