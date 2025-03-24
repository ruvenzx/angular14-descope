import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescopeAuthService } from '@descope/angular-sdk';
import { zip } from 'rxjs';

export function initializeApp(authService: DescopeAuthService) {
  return () => zip([authService.refreshSession(), authService.refreshUser()]);
}
debugger
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[{
          provide: APP_INITIALIZER,
          useFactory: initializeApp,
          deps: [DescopeAuthService],
          multi: true,
        },]
})
export class Common1Module { }
