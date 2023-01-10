import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworksComponent } from './artworks.component';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';

@NgModule({
  imports: [
    CommonModule,
    ArtworkRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ArtworkListComponent,
    ArtworkDetailsComponent],
  declarations: [
    ArtworkListComponent,
    ArtworkDetailsComponent
  ],
})
export class ArtworkModule {}
