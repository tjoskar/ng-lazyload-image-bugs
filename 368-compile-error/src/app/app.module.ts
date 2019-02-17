import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
