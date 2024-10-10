import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }

  header = [
    { h3: 'Yeni Projeler' },
    { h3: 'Referans Projelerimiz' },
    { h3: 'Satışta Olan Projeler' },
  ];

  services = [
    {
      icon: '/assets/1.png',
      title: 'Mevsim Sitesi',
      description:
        'Kentsel dönüşüm, mahalleleri dönüştürmek, altyapıyı geliştirmek ve genel yaşam kalitesini artırmak için ...',
    },
    {
      icon: '/assets/2.jpg',
      title: 'Besmele Apartmanı',
      description:
        'Kat karşılığı inşaat projeleri, müteahhitler ve arsa sahipleri arasında yapılan anlaşmalar çerçevesinde ...',
    },

    {
      icon: '/assets/1.png',
      title: 'Pınar Apartmanı',
      description:
        'Konut binaları, insanların barınma ihtiyaçlarını karşılamak için hayati öneme sahiptir. Günümüzde, artan ...',
    },

    {
      icon: '/assets/1.png',
      title: 'İrem Park',
      description:
      'Konut binaları, insanların barınma ihtiyaçlarını karşılamak için hayati öneme sahiptir. Günümüzde, artan ...',
    },

    {
      icon: '/assets/2.jpg',
      title: 'Ilıca Yaşam Park',
      description:
      'Konut binaları, insanların barınma ihtiyaçlarını karşılamak için hayati öneme sahiptir. Günümüzde, artan ...',
    },
  ];
}
