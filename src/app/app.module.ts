import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworkModule } from './artworks/artworks.module';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { ArtistModule } from './artist/artist.module';
import { MuseumModule } from './museum/museum.module';
import { MovementModule } from './movement/movement.module';
import { ImageModule } from './image/image.module';
import { RouterModule } from '@angular/router';
import { MuseumRoutingModule } from './museum/museum-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbAccordionModule,
    HttpClientModule,
    LayoutModule,
    MuseumModule,
    MuseumRoutingModule,
    ImageModule,
    ArtworkModule,
    ArtistModule,
    MovementModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
