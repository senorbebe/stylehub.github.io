import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  faBars = faBars;
  faClose = faXmark;
  menuOpen = false;

  router: Router;

  primaryNav: Element | null = null;
  navToggle: Element | null = null;


  @Output() buttonPressed = new EventEmitter<boolean>();

  navToggele() {

    const visibility = this.primaryNav?.getAttribute("data-visible");
    console.log(visibility);

    if (visibility == "true") {
      this.menuOpen = false;
      this.primaryNav?.setAttribute("data-visible", String(false));
      this.navToggle?.setAttribute('aria-expanded', String(false));
    } else {
      this.menuOpen = true;
      this.primaryNav?.setAttribute("data-visible", String(true));
      this.navToggle?.setAttribute('aria-expanded', String(true));
    }
  }

  constructor(private angularRouter: Router) {
    this.router = angularRouter;
  }

  ngOnInit(): void {
    this.primaryNav = document.querySelector(".primary-navigation");
    this.navToggle = document.querySelector(".mobile-nav-toggle");
  }

}
