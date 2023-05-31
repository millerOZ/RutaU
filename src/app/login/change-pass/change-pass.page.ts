import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ChangePassService } from "./service/changePass.service";

@Component({
  selector: "app-change-pass",
  templateUrl: "./change-pass.page.html",
  styleUrls: ["./change-pass.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ChangePassPage implements OnInit {
  password1: any;
  password2: any;

  constructor(private changePassService: ChangePassService) {}

  ngOnInit() {}
  changePassword() {
    if (this.password1 && this.password2) {
      localStorage.getItem("user_id");
      localStorage.getItem("otp");

      let obj = {
        user_Id: localStorage.getItem("user_id"),
        password: this.password1,
        otp: localStorage.getItem("otp"),
      };
      this.changePassService.postChangePasswordByOTP(obj);
    }
  }
}
