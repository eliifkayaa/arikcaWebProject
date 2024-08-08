import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss'
})
export class HomeProjectsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        watchSlidesProgress: true,
        loop: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          }
        }
      })
    }
  }

  services = [
    {
      icon: '/assets/proje5.jpeg',
      title: 'İrem Apartmanı'
    },
    {
      icon: '/assets/proje6.jpg',
      title: 'İrem Residence'
    },
    {
      icon: '/assets/harman.jpeg',
      title: 'İrem Apartmanı'
    },
    {
      icon: '/assets/1.png',
      title: 'İrem Residence'
    },
    {
      icon: '/assets/2.jpg',
      title: 'İrem Apartmanı'
    },
    {
      icon: '/assets/1.png',
      title: 'Arıkca Residence'
    },
    {
      icon: '/assets/3.jpg',
      title: 'İrem Apartmanı'
    },
    {
      icon: '/assets/proje2.jpg',
      title: 'Arıkca Residence'
    },
    {
      icon: '/assets/proje5.jpeg',
      title: 'İrem Apartmanı'
    },
    {
      icon: '/assets/proje6.jpg',
      title: 'İrem Residence'
    },
    {
      icon: '/assets/harman.jpeg',
      title: 'İrem Apartmanı'
    },
    {
      icon: '/assets/1.png',
      title: 'İrem Residence'
    }
  ]
}