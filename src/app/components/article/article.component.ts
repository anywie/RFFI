import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  id: any;
  article: any;
  // pdf
  page = 1;
  totalPages: number;
  isLoaded = false;

  constructor(private activateRoute: ActivatedRoute, private postSvc: ContentService, private location: Location) {

    // tslint:disable-next-line:no-string-literal
    this.id = activateRoute.snapshot.params['id'];
    console.log(this.activateRoute);
  }

  ngOnInit(): void {
    this.postSvc.getContent(this.id).subscribe(res => {
      this.article = res;
    });
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
}
