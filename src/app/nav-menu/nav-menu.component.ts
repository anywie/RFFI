import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  hidingNav: string;

  selectNav = [
    {
      link: '/publications',
      value: 'Публикации'
    },
    {
      link: '/',
      value: 'Лента событий'
    },
    {
      link: '/media',
      value: 'Видеозаписи'
    }
  ];

  currentValue = this.selectNav[1].value;
  constructor() { }

  ngOnInit() {
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
  mouseEvent(e) {
    console.log(e.type);
    if (e.type === 'mouseenter') {
      this.hidingNav = 'd-block';
    }
    else {
      this.hidingNav = 'd-none';
    }
  }
  changeValue(str) {
    this.currentValue = str;
  }
}
