import { RouteModule } from './route/route.module';
import { HomeModule } from "./home/home.module";

import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, BrowserModule, RouteModule,IonicModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
