import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './pages/users/users';
import { DataBinding } from './pages/data-binding/data-binding';
import { Header } from './pages/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Users, DataBinding, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MenuMatch');
}
