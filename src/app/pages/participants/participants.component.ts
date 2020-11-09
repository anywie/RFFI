import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {  
  authors: any = [];
  showPopUp = false;
  curentPartc: any;
  currItem: Promise<any>;
  // currItem: any = [];
  pageType = 1;
  constructor(private pageSvc: GetAllService) {
  }

  ngOnInit(): void {
    // this.pageSvc.getAllAuthors().subscribe(res => {
    //   this.authors = res;
    // });
    this.authors = this.pageSvc.getAllAuthors();
    this.curentPartc = this.authors[0];
  }

  ShowPopUp(author: any): void{
    this.showPopUp = !this.showPopUp;
    const body = document.getElementsByTagName('body')[0];
    if (this.showPopUp) {
      this.curentPartc = author;
      this.currItem = author.contents;
      body.style.overflowY = 'hidden';
    }
    else {
      body.style.overflowY = 'auto';
    }
  }

}
