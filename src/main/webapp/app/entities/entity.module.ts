import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then(m => m.Version1NewsModule),
      },
      {
        path: 'covid-updates',
        loadChildren: () => import('./covid-updates/covid-updates.module').then(m => m.Version1CovidUpdatesModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class Version1EntityModule {}
