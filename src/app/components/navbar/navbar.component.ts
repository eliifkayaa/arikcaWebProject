import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;

  navLinks = [
    { url: '/', label: 'Anasayfa'},
    { url: '/about', label: 'Hakkımızda'},
    { url: '/project', label: 'Projeler'},
    { url: '/contact', label: 'İletişim'},
  ];

  activeLinks: { [key: string]: boolean } = {};

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLinks();
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  onRouterLinkActive(isActive: boolean, link: string) {
    this.activeLinks[link] = isActive;
  }

  private updateActiveLinks() {
    this.navLinks.forEach(link => {
      const urlTree = this.router.parseUrl(this.router.url);
      const isActive = this.router.isActive(link.url, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' });
      this.activeLinks[link.label] = isActive;
    });
  }
}
