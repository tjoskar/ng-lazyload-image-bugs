import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: ` <img [defaultImage]="defaultImage" [lazyLoad]="image" /> `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
