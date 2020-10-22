import { Component, OnInit } from '@angular/core';
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
  currItem: any = [];
  constructor(private pageSvc: GetAllService) {
  }

  ngOnInit(): void {
    this.pageSvc.getAllAuthors().subscribe(res => {
      this.authors = res;
    });
    this.curentPartc = this.authors[0];
  }

  ShowPopUp(author: any): void{
    this.showPopUp = !this.showPopUp;
    this.curentPartc = author;
    this.currItem = author.contents;
  }
}
