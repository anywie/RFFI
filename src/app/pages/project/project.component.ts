import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
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
