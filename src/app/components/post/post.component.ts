import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
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
  posts: any = [];
  post: any;
  landingPostId = 2;
  item: Item = new Item();

  constructor(private postSvc: PostService, private router: Router) { }

  ngOnInit() {
    // this.postSvc.getPost(this.landingPostId).subscribe(res => {
    //   this.post = res;
    // });
    this.postSvc.getAllPosts().subscribe(res => {
      this.posts = res;
    });
  }

  goToArticle(myItem: Item) {

    this.router.navigate(
      ['/article', myItem.id]
    );
  }
}
