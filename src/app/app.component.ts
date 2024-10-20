import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WhyRecyloopComponent } from './components/why-recyloop/why-recyloop.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    WhyRecyloopComponent,
    AboutUsComponent,
    TestimonialsComponent,
    BlogComponent,
    SubscribeComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recyloop-landing-page';
}
