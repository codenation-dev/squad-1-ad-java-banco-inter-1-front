import { Injectable } from '@angular/core';
import { AuthenticationContextModel } from '../models';
import { PlatformDetectorService } from '../services/platform-detector.service';

const KEY_AUTH_CONTEXT = 'centralerror:guestAuthContext';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private platformDetectorService: PlatformDetectorService) {
  }

  hasActiveUser(): boolean {
    return !!this.getStoredAuthenticationContext();
  }

  login(authenticationContext: AuthenticationContextModel) {
    this.setStoredAuthenticationContext(authenticationContext);
  }

  logout() {
    this.removeAuthenticationContext();
  }

  getAuthenticationContext(): AuthenticationContextModel {
    return this.getStoredAuthenticationContext();
  }

  private getStoredAuthenticationContext(): AuthenticationContextModel {
    if (!this.platformDetectorService.isPlatformBrowser()) {
      return null;
    }

    return JSON.parse(localStorage.getItem(KEY_AUTH_CONTEXT)) as AuthenticationContextModel;
  }

  private setStoredAuthenticationContext(authenticationContext: AuthenticationContextModel) {
    if (!this.platformDetectorService.isPlatformBrowser()) {
      return;
    }

    localStorage.setItem(KEY_AUTH_CONTEXT, JSON.stringify(authenticationContext));
  }

  private removeAuthenticationContext() {
    if (!this.platformDetectorService.isPlatformBrowser()) {
      return;
    }

    localStorage.removeItem(KEY_AUTH_CONTEXT);
  }

}
