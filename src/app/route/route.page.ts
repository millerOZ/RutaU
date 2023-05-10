import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { IonicSlides } from "@ionic/angular";
import { register } from "swiper/element/bundle";

register();
@Component({
  selector: "app-route",
  templateUrl: "./route.page.html",
  styleUrls: ["./route.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoutePage implements OnInit {
  swiperModules = [IonicSlides];

  constructor() {}
  ngOnInit(): void {}
}
