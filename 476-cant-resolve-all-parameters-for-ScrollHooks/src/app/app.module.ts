import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { AppComponent } from './app.component';

export class MyScrollHooks extends ScrollHooks {
  constructor() {
    super()
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LazyLoadImageModule],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: MyScrollHooks }],
  bootstrap: [AppComponent],
})
export class AppModule {}
