import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageModuleModule } from './image-module/image-module.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
