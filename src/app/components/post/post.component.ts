import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { GetAllService } from 'src/app/services/get-all.service';
import { Router } from '@angular/router';

export class Item {

  id: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // posts: any = [];
  posts: Promise<any>;
  // post: any;
  landingPostId = 2;
  item: Item = new Item();
  authorName = "";
  @Input() currentAuthor: any[];
  @Input() currentPage: number; // id
  page = 1;
  pageSize = 7;
  constructor(private contentSvc: ContentService, private authorSvc: GetAllService, private router: Router) { }

  ngOnInit(): void {
    // this.postSvc.getPost(this.landingPostId).subscribe(res => {
    //   this.post = res;
    // });

    this.posts = this.contentSvc.getAllContents();
    // this.contentSvc.getAllContents().subscribe(res => {
    //   this.posts = res;
    // });
  }

  goToArticle(myItem: Item): void {
    this.router.navigate(
      ['/article', myItem.id]
    );
  }
}
