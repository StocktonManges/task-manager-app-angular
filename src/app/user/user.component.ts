import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() makes the avatar property of UserComponent accessible. The
  // exclamation point tells typescript that this property doesn't need
  // an initial value. {required: true} tells Angular that this property
  // must receive a value.
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // EventEmitters send data up the chain to its parents. This property
  // with the Output decorator becomes an event type that can be
  // listened to just like any other event listener.
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
