import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  screen_lg = '500px';
  defaultImage = 'https://www.placecage.com/1000/1000';
  image1 = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  image2 = 'https://images.unsplash.com/photo-1550246520-56dedb9b4a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3401&q=80'
  image3 = 'https://images.unsplash.com/photo-1550308576-cd091bbfd97b?ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80'
}
