import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from './icons/icons.module';

const MODULES = [BrowserModule, AppRoutingModule, IconsModule];
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
