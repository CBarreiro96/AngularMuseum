import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworkModule } from './artworks/artworks.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { ArtistModule } from './artworks/artist/artist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArtworkModule,
    NgbModule,
    LayoutModule,
    ArtistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
