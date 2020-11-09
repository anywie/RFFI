import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, AfterViewInit {

  id: any;
  article: any;
  // pdf
  page = 1;
  totalPages: number;
  isLoaded = false;

  // videos
  dangerousVideoUrl: string;
  // tslint:disable-next-line:max-line-length
  constructor(private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer, private postSvc: ContentService, private location: Location) {

    // tslint:disable-next-line:no-string-literal
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.postSvc.getContent(this.id).subscribe(res => {
      this.article = res;
    });

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    //

    const t = this.article.hasOwnProperty('authors');
    console.log("wow" + t);
  }
  ngAfterViewInit(): void {
  }
  backClicked(): void {
    this.location.back();
  }

  afterLoadComplete(pdfData: any): void {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage(): void {
    this.page++;
  }

  prevPage(): void {
    this.page--;
  }

  transform(id: string): any {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }
}
