import { Http } from "@capacitor-community/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/login";

import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private router: Router) {}

  async postLogin(user: User) {
              
    const url = "http://apirutau.somee.com/api/Account/Login";
    const data = {
      User: user.User,
      Pass: user.Pass,
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
    if (response.status === 200 && response.data && response.data.name) {
      console.log("La petición fue exitosa");
      if (data.User) localStorage.setItem("email", data.User);
      localStorage.setItem("token", response.data.token);

      this.router.navigate(["/home"]);
    } else {
      console.log("La petición no fue exitosa");
    }
    console.log("Respuesta:", response);

    /* {
      "data": {
          "rpta": "El nombre de usuario o contraseña son incorrectos",
          "codigo": "-1"
      },
      "headers": {
          "content-type": "application/json; charset=utf-8"
      },
      "status": 200,
      "url": "https://apirutau20230506111004.azurewebsites.net/api/Account/Login"
  } 
  {
    "data": {
        "name": "miller",
        "token": "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lkIjoiZTlhYjM0ZjQtMmM0MC00YjU3LWIyZjEtMDVmMDViM2VlM2YxIiwiZXhwIjoxNjgzODUwNTkxfQ.stWW1dZu9vBv2n1Q6OfRM4IIoMUsL1_A-KY5PLtnVWV3Bz1KVmjGkgrJu6LjUIWG3Q6pN3VffNIURL2X59Dg-Q"
    },
    "headers": {
        "content-type": "application/json; charset=utf-8"
    },
    "status": 200,
    "url": "https://apirutau20230506111004.azurewebsites.net/api/Account/Login"
}
  
  */
  }
}
