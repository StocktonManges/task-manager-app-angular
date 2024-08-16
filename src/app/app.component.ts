import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  // When compiled, the 'app-root' tag is found in index.html and
  // replaced with the app.component.html file.
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // This makes DUMMY_USERS accessible in the html template and can then
  // be passed as arguments for properties on other components.
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Selected user function called on user: ' + id);
  }
}
