import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from '../../services/get-all.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
  
export class HelpComponent implements OnInit {
  allPost: any = [];

  constructor(private allPosts: GetAllService, private router: Router) { }

  ngOnInit(): void {
    this.allPosts.getAllContents().subscribe(res => {
      this.allPost = res;
    });
  }


}
