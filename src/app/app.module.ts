import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
// Drag&Scoll carousel
import { DragScrollModule } from 'ngx-drag-scroll';

// pdf
import { PdfViewerModule } from 'ng2-pdf-viewer';

// video
import { YouTubePlayerModule } from '@angular/youtube-player';

// MDB Angular Free
// import { WavesModule, ModalModule, CarouselModule } from 'angular-bootstrap-md';
// components
import { LinkToSchoolComponent } from './pages/link-to-school/link-to-school.component';
import { HelpComponent } from './pages/help/help.component';
import { ParticipantsComponent } from './pages/participants/participants.component';
import { MediaComponent } from './pages/media/media.component';
import { ProjectComponent } from './pages/project/project.component';
import { IndexComponent } from './pages/index/index.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './components/article/article.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// go to top
import { GoTopButtonModule } from 'ng-go-top-button';
import { AuthorComponent } from './pages/participants/author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavMenuComponent,
    FooterComponent,
    LinkToSchoolComponent,
    HelpComponent,
    ParticipantsComponent,
    MediaComponent,
    ProjectComponent,
    IndexComponent,
    PublicationsComponent,
    ArticleComponent,
    ContactsComponent,
    AuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragScrollModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    MatCommonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatTabsModule,
    MatGridListModule,
    PdfViewerModule,
    YouTubePlayerModule,
    NgbModule,
    GoTopButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
