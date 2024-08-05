import { Component, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { IsActiveMatchOptions, NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navLinks = [
    { url: '', label: 'Anasayfa'},
    { url: '/about', label: 'Hakkımızda'},
    { url: '/project', label: 'Projeler'},
    { url: '/services', label: 'Hizmetler'},
    { url: '/photos', label: 'Galeri'},
    { url: '/contact', label: 'İletişim'},
  ];

  //activeLinks['Anasayfa'] ifadesi, "Anasayfa" linkinin aktif olup olmadığını döndürür.
  activeLinks: { [key: string]: boolean} = {};

  onRouterLinkActive(isActive: boolean, link: string) {
    this.activeLinks[link] = isActive;
    //Burada linklerin yalnızca bir kere yüklendiğinde çalışır, yani navigasyon yapıldığında tekrar çalışmaz.
  }
  
}