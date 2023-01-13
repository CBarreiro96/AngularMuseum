import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MuseumSectionComponent } from './home/components/museum-section/museum-section.component';
import { ArtistSectionComponent } from './home/components/artist-section/artist-section.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MovementSectionComponent } from './home/components/movement-section/movement-section.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCarouselModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MuseumSectionComponent,
    ArtistSectionComponent,
    MovementSectionComponent
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MuseumSectionComponent,
    ArtistSectionComponent,
    MovementSectionComponent
  ]
})
export class LayoutModule { }
