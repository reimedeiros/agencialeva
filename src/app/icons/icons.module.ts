import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  exports: [FontAwesomeModule],
  imports: [
    CommonModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass);
  }
}
