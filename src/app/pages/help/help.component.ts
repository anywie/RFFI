import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
  
export class HelpComponent implements OnInit {
  allPost: Promise<any>;
  boolAthr = false;
  pageType = 2;
  constructor(private allPosts: ContentService, private router: Router) { }

  ngOnInit(): void {
    // this.allPosts.getAllContents().subscribe(res => {
    //   this.allPost = res;
    // });
    this.allPost = this.allPosts.getAllContents();
  }
}
