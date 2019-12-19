import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
  }

  isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isPlatformServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  isPlatformWorkerApp(): boolean {
    return isPlatformWorkerApp(this.platformId);
  }

  isPlatformWorkerUi(): boolean {
    return isPlatformWorkerUi(this.platformId);
  }
}
