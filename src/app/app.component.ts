import { Component } from '@angular/core';
import { DescopeAuthService } from '@descope/angular-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: DescopeAuthService) {}
  title = 'testAngularDemo';
}
