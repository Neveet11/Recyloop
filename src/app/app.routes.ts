import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WhyRecyloopComponent } from './components/why-recyloop/why-recyloop.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'why-recyloop', component: WhyRecyloopComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'footer', component: FooterComponent },
];
