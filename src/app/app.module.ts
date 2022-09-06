import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from './icons/icons.module';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section3Component } from './sections/section3/section3.component';
import { Section4Component } from './sections/section4/section4.component';
import { Section5Component } from './sections/section5/section5.component';
import { Section6Component } from './sections/section6/section6.component';

const MODULES = [BrowserModule, AppRoutingModule, IconsModule];
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, Section1Component, Section2Component, Section3Component, Section4Component, Section5Component, Section6Component],
  imports: [MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
