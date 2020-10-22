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
}
