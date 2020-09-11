import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { MediaService } from 'src/app/services/media.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  contents: any = [];
  page: any;
  landingPageId = 2;
  videos: any = [];
  dangerousVideoUrl: string;

  constructor(private pageSvc: PageService, private vid: MediaService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.pageSvc.getPage(this.landingPageId).subscribe(res => {
      this.page = res;
    });
    this.vid.getAllVideos().subscribe(res => {
      this.videos = res;
    });
  }

  transform(id: string) {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
