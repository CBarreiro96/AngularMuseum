import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
const routes: Routes = [
  {
    path: 'museums',
    children: [
      { path: 'list', component: MuseumListComponent },
      { path: ':id', component: MuseumDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumRoutingModule {}
