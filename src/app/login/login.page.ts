import { LoginService } from "./service/login.service";
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { User } from "../models/login";
import { HttpClientModule } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  
schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPage implements OnInit {

  constructor(public loginService: LoginService, private router: Router) {}
  userForm: any;
  passForm: any;
  ngOnInit() {}
  login() {
    console.log(this.userForm);
    console.log(this.passForm);
    let user: User = {
      User: this.userForm,
      Pass: this.passForm,
    };
    this.loginService.postLogin(user).then(

    );
  }
  recoverPass() {
    this.router.navigate(['/recover']);
    }
}
