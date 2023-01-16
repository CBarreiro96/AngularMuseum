import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
  {
    path: 'artists',
    children: [
      {
        path: 'create',
        component: ArtistCreateComponent,
      },
      {
        path: 'list',
        component: ArtistListComponent,
      },
      {
        path: ':id',
        component: ArtistDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistRoutingModule {}
