import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent implements OnInit {

  items: MenuItem[] | undefined

  home: MenuItem[] | undefined
  ngOnInit(): void {
    this.items = [{
      icon: 'pi pi-home',
      route: '/'
    },
    { 
      label: 'Hakkımızda', 
      route: '/about' 
    },
    { 
      label: 'Projeler', 
      route: '/project' 
    },
    { 
      label: 'Hizmetler', 
      route: '/services' 
    },
    { 
      label: 'Galeri', 
      route: '/photos' 
    },
    { 
      label: 'İletişim', 
      route: '/contact' 
    },
  ];
  }

}

