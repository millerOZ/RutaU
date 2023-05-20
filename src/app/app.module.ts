import { RouteModule } from "./route/route.module";
import { HomeModule } from "./home/home.module";
import { IonicStorageModule } from "@ionic/storage-angular";
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BrowserModule,
    RouteModule,

    IonicModule.forRoot(),
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
