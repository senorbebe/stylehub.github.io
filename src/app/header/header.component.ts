import {Component, EventEmitter, Output} from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent {

  faBars = faBars;
  faClose = faXmark;
  menuOpen:boolean = false;

  router: Router;


  @Output() buttonPressed = new EventEmitter<boolean>();

  navToggele() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private angularRouter: Router) {
    this.router = angularRouter;
  }

}
