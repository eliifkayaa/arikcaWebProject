import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss'
})
export class HomeProjectsComponent  implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
          
   const swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

    }

  }

  services = [
    {
      icon: '/assets/1.png',
      title: 'Kentsel Dönüşüm Uygulamları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    },
    {
      icon: '/assets/2.jpg',
      title: 'Kat Karşılığı İnşaat Projeleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    },
    {
      icon: '/assets/3.jpg',
      title: 'Mimarlık Hizmetleri',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    },
    {
      icon: '/assets/1.png',
      title: 'Konut Binaları',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    },
    {
      icon: '/assets/3.jpg',
      title: 'İrem Apartmanı',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    },
    {
      icon: '/assets/1.png',
      title: 'İrem Residence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, lobortis lectus non, tincidunt neque.'
    }
  ]
  }