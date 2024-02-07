import {Component, ViewEncapsulation} from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {NgStyle} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatMenu,
    MatMenuTrigger,
    MatButton,
    MatMenuItem,
    MatGridList,
    MatGridTile,
    MatIcon,
    NgStyle,
    RouterLinkActive,
    RouterLink,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
