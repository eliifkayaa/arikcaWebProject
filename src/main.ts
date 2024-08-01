import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Bu import olmadan pagination çalışmıyor 
import { register as registerSwiperElements } from 'swiper/element/bundle'

registerSwiperElements();

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
