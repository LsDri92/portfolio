import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ]
})
export class FooterModule { 
    currentYear: number = new Date().getFullYear();
}
