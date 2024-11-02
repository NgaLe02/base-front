import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RedirectResolver {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): void {
    const redirectUri = route.queryParams["redirectUri"];
    if (redirectUri) {
      this.router.navigateByUrl(redirectUri);
    }
  }
}
