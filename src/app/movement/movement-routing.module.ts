import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementDetailComponent } from './movement-detail/movement-detail.component';
import { MovementListComponent } from './movement-list/movement-list.component';
const routes: Routes = [
  {
    path: 'movement',
    children: [
      { path: 'list', component: MovementListComponent },
      { path: ':id', component: MovementDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementRoutingModule {}
