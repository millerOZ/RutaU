import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad() {
    const isAuthenticated = !!localStorage.getItem("authenticated");
    if (isAuthenticated) {
      return true;
    } else {
      const navegation = this.router.getCurrentNavigation();
      console.log(navegation);
      let url = "/";
      if (navegation) {
        url = navegation.extractedUrl.toString();
      }

      this.router.navigate(["/"], { queryParams: { returnto: url } });
      return false;
    }
  }
}
