import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { LinkToSchoolComponent } from './pages/link-to-school/link-to-school.component';
import { HelpComponent } from './pages/help/help.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { MediaComponent } from './pages/media/media.component';
import { ProjectComponent } from './pages/project/project.component';
import { IndexComponent } from './pages/index/index.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ArticleComponent } from './components/article/article.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  useHash: false,
  enableTracing: false
};

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'media', component: MediaComponent },
  { path: 'links', component: LinkToSchoolComponent },
  { path: 'help', component: HelpComponent },
  { path: 'participant', component: ParticipantsComponent },
  { path: 'participant/:id/info', component: ParticipantsComponent },
  { path: 'participant/:id/publications', component: ParticipantsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
