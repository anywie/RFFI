import { Component, OnInit } from '@angular/core';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  authors: any = [];

  constructor(private pageSvc: GetAllService) {
  }

  ngOnInit(): void {
    this.pageSvc.getAllAuthors().subscribe(res => {
      this.authors = res;
    });
  }
}
