import { Component, AfterViewInit  } from '@angular/core';

// import Swiper, { Navigation, Pagination, Autoplay, Parallax } from 'swiper';
// import type { SwiperOptions } from 'swiper';

// import * as $ from 'jquery';


// Swiper.use([Navigation, Pagination, Autoplay, Parallax]);


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent  {

    // ngAfterViewInit() {
    //   // HERO SLIDER
    //   const menu: string[] = [];
    //   $('.swiper-slide').each(function(index: number) {
    //     menu.push($(this).find('.slide-inner').attr("data-text") as string);
    //   });

  
    //   const interleaveOffset = 0.5;
    //   const swiperOptions: SwiperOptions = {
    //     loop: true,
    //     speed: 1000,
    //     parallax: true,
    //     autoplay: {
    //       delay: 6500,
    //       disableOnInteraction: false,
    //     },
    //     watchSlidesProgress: true,
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //     on: {
    //       progress(swiper) {
    //         for (let i = 0; i < swiper.slides.length; i++) {
    //           const slideProgress = swiper.slides[i].progress;
    //           const innerOffset = swiper.width * interleaveOffset;
    //           const innerTranslate = slideProgress * innerOffset;
    //           swiper.slides[i].querySelector<HTMLElement>(".slide-inner").style.transform =
    //             `translate3d(${innerTranslate}px, 0, 0)`;
    //         }
    //       },
    //       touchStart(swiper) {
    //         for (let i = 0; i < swiper.slides.length; i++) {
    //           swiper.slides[i].style.transition = "";
    //         }
    //       },
    //       setTransition(swiper, speed) {
    //         for (let i = 0; i < swiper.slides.length; i++) {
    //           swiper.slides[i].style.transition = `${speed}ms`;
    //           swiper.slides[i].querySelector<HTMLElement>(".slide-inner").style.transition =
    //             `${speed}ms`;
    //         }
    //       }
    //     }
    //   };
  
    //   const swiper = new Swiper('.swiper-container', swiperOptions);
  
    //   // DATA BACKGROUND IMAGE
    //   const sliderBgSetting = $(".slide-bg-image");
    //   sliderBgSetting.each(function(indx) {
    //     if ($(this).attr("data-background")) {
    //       $(this).css("background-image", `url(${ $(this).data("background") })`);
    //     }
    //   });
    // }
}

