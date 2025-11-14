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

  projects = [
    {
      icon: '/assets/proje5.jpeg',
      title: 'İrem Park Apt.',
      location: 'Kahramanmaraş',
      year: '2020'
    },
    {
      icon: '/assets/proje6.jpg',
      title: 'Mevsim Sitesi',
      location: 'Kahramanmaraş',
      year: '2019'
    },
    {
      icon: '/assets/harman.jpeg',
      title: 'Fatih Apt.',
      location: 'Kahramanmaraş',
      year: '2021'
    },
    {
      icon: '/assets/proje2.jpg',
      title: 'Maraşhan Sitesi',
      location: 'Kahramanmaraş',
      year: '2018'
    },
    {
      icon: '/assets/3.jpg',
      title: 'Karamanlı Apt.',
      location: 'Kahramanmaraş',
      year: '2022'
    },
    {
      icon: '/assets/0.jpg',
      title: 'İnci Sitesi B Blok',
      location: 'Kahramanmaraş',
      year: '2023'
    }
  ]
}