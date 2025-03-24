import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DescopeAuthModule, DescopeAuthService, descopeInterceptor } from '@descope/angular-sdk';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { zip } from 'rxjs';
import { Common1Module } from './common1/common1.module';


export function initializeApp(authService: DescopeAuthService) {
	return () => zip([authService.refreshSession(), authService.refreshUser()]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DescopeAuthModule.forRoot({
      projectId:'P2eXyIh7lA7XdVatDQHlgD455zXd'
    }),
    BrowserModule,
    Common1Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
