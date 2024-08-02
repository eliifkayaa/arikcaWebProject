import { Component, AfterViewInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {

      const menu: string[] = [];
      $('.swiper-slide').each((index: number, element: HTMLElement) => {
        menu.push($(element).find('.slide-inner').attr('data-text') as string);
      });

      const interleaveOffset = 0.5;
      const swiperOptions: SwiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        initialSlide: 2,

        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          progress: (swiper: any) => {
            for (let i = 0; i < swiper.slides.length; i++) {
              const slideProgress = swiper.slides[i].progress;
              const innerOffset = swiper.width * interleaveOffset;
              const innerTranslate = slideProgress * innerOffset;
              swiper.slides[i].querySelector('.slide-inner').style.transform =
                `translate3d(${innerTranslate}px, 0, 0)`;
            }
          },
          touchStart: (swiper: any) => {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = '';
            }
          },
          setTransition: (swiper: any, speed: number) => {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = `${speed}ms`;
              swiper.slides[i].querySelector('.slide-inner').style.transition =
                `${speed}ms`;
            }
          }
        }
      };

      const swiper = new Swiper('.swiper-container', swiperOptions)

      const sliderBgSetting = $('.slide-bg-image');
      sliderBgSetting.each((indx: number, element: HTMLElement) => {
        if ($(element).attr('data-background')) {
          $(element).css('background-image', `url(${$(element).data('background')})`);
        }
      });
    }
  }
}


