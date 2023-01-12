import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MuseumRoutingModule } from './museum-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbAccordionModule,
    MuseumRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MuseumListComponent,
    MuseumDetailComponent,
  ]
})
export class MuseumModule { }
