import { Component, OnInit } from '@angular/core';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-link-to-school',
  templateUrl: './link-to-school.component.html',
  styleUrls: ['./link-to-school.component.scss']
})
export class LinkToSchoolComponent implements OnInit {
  schools: any = [];

  constructor(private pageSvc: GetAllService) {
  }

  ngOnInit(): void {
    this.pageSvc.getAllSchools().subscribe(res => {
      this.schools = res;
    });
  }
}
