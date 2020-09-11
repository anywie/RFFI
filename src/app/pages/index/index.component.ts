import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  contents: any = [];
  page: any;
  landingPageId = 1;

  constructor(private pageSvc: PageService) {
  }

  ngOnInit(): void {
    this.pageSvc.getPage(this.landingPageId).subscribe(res => {
      this.page = res;
    });
  }
}
