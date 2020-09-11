import { ConditionalExpr } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { GetAllService } from '../../services/get-all.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  viewProviders: [MatIconRegistry]
})
export class PublicationsComponent implements OnInit {
  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;
  // imagelist = [
  //   'luke.png',
  //   'chubaka.png',
  //   'boba.png',
  //   'c3po.png',
  //   'leia.png',
  //   'obi.png',
  //   'r2d2.png',
  //   'storm.png',
  //   'varder.png',
  //   'yoda.png',
  //   'yolo.png'
  // ];
  imagelist: any = [];
  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;
  currItem: any = [];

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  constructor(
    matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private authorSvc: GetAllService,
    private firstRender: GetAllService
  ) {
    matIconRegistry
      .addSvgIcon('github',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/img/github.svg'))
      .registerFontClassAlias('fontawesome', 'fa');
  }
  // constructor() { }
  ngOnInit(): void {
    this.authorSvc.getAllAuthors().subscribe(res => {
      this.imagelist = res;
    });
    this.firstRender.getAuthors(2).subscribe(res => {
      this.currItem = res;
    });
  }

  // ngAfterViewChecked(): void {
  //   if (this.currItem.length === 0) {
  //     this.currItem = this.imagelist[0].contents;
  //   }
  // }

  clickItem(item): void {
    console.log('item clicked');
    this.currItem = item;
    console.log(item.contents.id);
  }

  remove(): void {
    this.imagelist.pop();
  }

  toggleHideSB(): void {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable(): void {
    this.disabled = !this.disabled;
  }
  toggleXDisable(): void {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable(): void {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft(): void {
    this.ds.moveLeft();
  }

  moveRight(): void {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean): void {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean): void {
    this.rightNavDisabled = reachesRightBound;
  }

  onSnapAnimationFinished(): void {
  }

  onIndexChanged(idx): void {
  }

  onDragScrollInitialized(): void {
  }

  onDragStart(): void {
  }

  onDragEnd(): void {
  }
}
