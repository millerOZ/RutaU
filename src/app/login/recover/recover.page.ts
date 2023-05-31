import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RecoverService } from "./service/recover.service";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-recover",
  templateUrl: "./recover.page.html",
  styleUrls: ["./recover.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RecoverPage implements OnInit {
  codeForm: any;
  emailForm: any;
  showCode = false;
  constructor(private recoverService: RecoverService) {}

  ngOnInit() {}
  recover() {
    this.showCode = !this.showCode;
    this.recoverService.postGetOTP(this.emailForm);
  }
  sendCode() {
    let param = {
      email: this.emailForm,
      cod: this.codeForm,
    };
    this.recoverService.postValidateOTP(param);
  }
}
