import { Injectable } from "@angular/core";
import { Http } from "@capacitor-community/http";

import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class RecoverService {
  baseUrl = "http://apirutau.somee.com/api/Account/";
  constructor(private router: Router) {}

  async postGetOTP(param: any) {
    const url = this.baseUrl + "GetOTP";
    const data = {
      email: param,
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
    /* {
        "rpta": "Usuario no registrado",
        "codigo": "-1"
       {
    "rpta": "Email enviado",
    "cod": "0"
} 
    } */
  }

  async postValidateOTP(param: any) {
    const url = this.baseUrl + "ValidateOTP";
    const data = {
      email: param.email,
      cod: param.cod,
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
    if (response.status === 200 && response.data && response.data.codigo === "0") {
      console.log("La petición fue exitosa", response.data.rpta);
      this.router.navigate(['/change-pass']);
      localStorage.setItem("otp", data.cod);
      localStorage.setItem("user_id", response.data.rpta);


/*       {
        "rpta": "e9ab34f4-2c40-4b57-b2f1-05f05b3ee3f1",
        "codigo": "0"
    } */

    } else {
      console.log("La petición no fue exitosa");
    }
  }

  async postChangePassword() {}
}
