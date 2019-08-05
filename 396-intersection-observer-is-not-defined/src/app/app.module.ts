import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { intersectionObserverPreset, LazyLoadImageModule } from 'ng-lazyload-image';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), LazyLoadImageModule.forRoot(intersectionObserverPreset)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
