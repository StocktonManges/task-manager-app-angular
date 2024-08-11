import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  // When compiled, the 'app-root' tag is found in index.html and
  // replaced with the app.component.html file.
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
