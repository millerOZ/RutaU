import { User } from "./../models/login";
import { Http } from "@capacitor-community/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}

  async postLogin(user: User) {
    const url =
      "https://apirutau20230506111004.azurewebsites.net/api/Account/Login";
    const data = {
      User: user.User,
      Pass: user.Pass,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await Http.post({
      url,
      headers,
      data,
    });

    console.log("Respuesta:", response);
  }
}
