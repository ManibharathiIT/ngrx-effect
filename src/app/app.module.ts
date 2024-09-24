import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { HttpClientModule } from '@angular/common/http'; 
import { EffectsModule } from '@ngrx/effects';
import { BlogEffect } from './shared/blog/Blog.effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    BlocksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([BlogEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
