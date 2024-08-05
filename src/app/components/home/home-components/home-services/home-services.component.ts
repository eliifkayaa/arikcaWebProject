import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements AfterViewInit {

  services = [
    {
      icon: '/assets/1.png',
      title: 'İrem Residence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    },
    {
      icon: '/assets/2.jpg',
      title: 'Arıkca Evleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    },
    {
      icon: '/assets/3.jpg',
      title: 'İrem Apartmanı',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    }
  ]
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
   
  }


}