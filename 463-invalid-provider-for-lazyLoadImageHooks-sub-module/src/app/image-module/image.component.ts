import { Component } from '@angular/core';

@Component({
  selector: 'image-root',
  template: `
    <img [defaultImage]="defaultImage" [lazyLoad]="image" />
  `,
})
export class ImageComponent {
  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
}
