import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './home/routing.module';
import { CardDetailsComponent } from './card-details/card-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardDetailsComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule { }
