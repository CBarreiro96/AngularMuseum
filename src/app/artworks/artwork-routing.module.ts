import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';



const routes: Routes = [
  {
    path: 'artworks',
    children: [
      {
        path: 'list',
        component: ArtworkListComponent,
      },
      {
        path: ':id',
        component: ArtworkDetailsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtworkRoutingModule {}
