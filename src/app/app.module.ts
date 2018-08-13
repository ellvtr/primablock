import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { WhitelistedComponent } from './whitelisted/whitelisted.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributorsComponent,
    WhitelistedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
