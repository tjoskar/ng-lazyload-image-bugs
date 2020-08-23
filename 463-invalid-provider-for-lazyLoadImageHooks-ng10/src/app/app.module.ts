import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { LazyLoadImageModule, IntersectionObserverHooks, Attributes, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';

import { AppComponent } from './app.component';

@Injectable()
export class LazyLoadImageHooks extends IntersectionObserverHooks {
  async loadImage({ imagePath }: Attributes): Promise<string> {
    console.log(imagePath);
    return await fetch(imagePath, {
      headers: {
        Authorization: 'Bearer ...',
      },
    })
      .then((res) => res.blob())
      .then((blob) => URL.createObjectURL(blob));
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  // imports: [BrowserModule, LazyLoadImageModule.forRoot(LazyLoadImageHooks)],
  imports: [BrowserModule, LazyLoadImageModule],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
  bootstrap: [AppComponent]
})
export class AppModule { }
