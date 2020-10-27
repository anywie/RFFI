import { ConditionalExpr } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentService } from 'src/app/services/content.service';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { GetAllService } from '../../services/get-all.service';
import { environment } from '../../../environments/environment';

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
  imagelist: any = [];
  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;
  currItem: any = [];
  getAllposts = true;
boolAthr = true;
  // pageType = 'publications';
  pageType = 1;

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  constructor(
    private authorSvc: GetAllService,
    private firstRender: GetAllService,
    private contentSvc: ContentService
  ) { }
  // constructor() { }
  ngOnInit(): void {
    this.authorSvc.getAllAuthors().subscribe(res => {
      this.imagelist = res;
    });
    // this.firstRender.getAuthors(2).subscribe(res => {
    //   this.currItem = res;
    // });
    this.contentSvc.getAllContents().subscribe(res => {
      this.currItem = res; // ???
    });
  }

  // ngAfterViewChecked(): void {
  //   if (this.currItem.length === 0) {
  //     this.currItem = this.imagelist[0].contents;
  //   }
  // }

  clickItem(item): void {
    this.currItem = item.contents;
    this.getAllposts = false;
  }
  getAllPost(): void {
    this.contentSvc.getAllContents().subscribe(res => {
      this.currItem = res;
    });
    this.getAllposts = true;
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
