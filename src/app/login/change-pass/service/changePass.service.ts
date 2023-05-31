import { Injectable } from "@angular/core";
import { Http } from "@capacitor-community/http";

import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class ChangePassService {
  //http://apirutau.somee.com/
  baseUrl = "http://apirutau.somee.com/api/Account/";
  constructor(private router: Router) {}

  async postChangePasswordByOTP(param: any) {
    const url = this.baseUrl + "ChangePasswordByOTP";
    const data = {
      user_Id: param.user_Id,
      password: param.password,
      otp: param.otp,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await Http.request({
      method: "POST",
      url,
      headers,
      data,
    });
    if (response.status === 200 && response.data && response.data.cod === "0") {
      console.log("La petición fue exitosa", response.data.rpta);
    } else {
      console.log("La petición no fue exitosa");
    }
    console.log("Respuesta:", response);
  }
}
