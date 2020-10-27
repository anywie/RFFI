import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  hidingNav: string;

  constructor() { }

  ngOnInit(): void {
  }

  // toggleCal(toggle_items) {
  //   if (toggle_items === 'meeting') {
  //     this.display_meeting = !this.display_meeting;
  //     if (this.display_meeting) {
  //       this.hidingClass = 'd-block'
  //     } else {
  //       this.hidingClass = 'd-none'
  //     }
  //   }
}
