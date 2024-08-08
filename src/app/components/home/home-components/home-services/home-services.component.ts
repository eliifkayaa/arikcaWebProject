
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements AfterViewInit {
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
      description: 'Kentsel dönüşüm, mahalleleri dönüştürmek, altyapıyı geliştirmek ve genel yaşam kalitesini artırmak için ...'
    },
    {
      icon: '/assets/2.jpg',
      title: 'Kat Karşılığı İnşaat Projeleri',
      description: 'Kat karşılığı inşaat projeleri, müteahhitler ve arsa sahipleri arasında yapılan anlaşmalar çerçevesinde ...'
    },

    {
      icon: '/assets/1.png',
      title: 'Konut Binaları',
      description: 'Konut binaları, insanların barınma ihtiyaçlarını karşılamak için hayati öneme sahiptir. Günümüzde, artan ...'
    }
  ]
  }
