import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAllService } from '../../../services/get-all.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  id: number;
  author: any;
  pageType = 1;
// pagetype 2

  constructor(private activateRoute: ActivatedRoute, private getAuthor: GetAllService) { 
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getAuthor.getAuthor(this.id).subscribe(res => {
      this.author = res;
    });
  }

}
