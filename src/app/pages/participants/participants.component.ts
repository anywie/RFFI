import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  authors: any = [];
  curentPartc: any;
  currItem: Promise<any>;
  // currItem: any = [];
  pageType = 1;
  constructor(private pageSvc: GetAllService, private router: Router) {
  }

  ngOnInit(): void {
    // this.pageSvc.getAllAuthors().subscribe(res => {
    //   this.authors = res;
    // });
    this.authors = this.pageSvc.getAllAuthors();
    this.curentPartc = this.authors[0];
  }

  RedirectToAuthor(author: any): void {
    this.router.navigate(
      ['/participant', author.id]
    );
  }

}
