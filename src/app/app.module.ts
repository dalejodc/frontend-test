import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    AboutUsComponent,
    MyWorkComponent,
    TestimonialsComponent,
    PricingComponent,
    ClientsComponent,
    NewsletterComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
