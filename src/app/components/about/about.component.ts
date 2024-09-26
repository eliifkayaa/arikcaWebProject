import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  items: MenuItem[] | undefined

  home: MenuItem[] | undefined
  ngOnInit(): void {
    this.items = [{
      icon: 'pi pi-home',
      route: '/'
    },
    { label: 'Hakkımızda', route: '/about' }];
  }

}
