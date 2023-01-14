import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MovementListComponent } from './movement-list/movement-list.component';
import { MovementRoutingModule } from './movement-routing.module';
import { MovementDetailComponent } from './movement-detail/movement-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MovementRoutingModule
  ],
  exports: [
    MovementListComponent,
    MovementDetailComponent
  ],
  declarations: [
    MovementListComponent,
    MovementDetailComponent
  ]
})
export class MovementModule { }
