import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { RouterModule } from '@angular/router';
import { ArtistRoutingModule } from './artist-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistCreateComponent } from './artist-create/artist-create.component';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [ArtistListComponent],
  declarations: [
    ArtistListComponent,
    ArtistDetailComponent,
    ArtistCreateComponent
  ]
})
export class ArtistModule { }
