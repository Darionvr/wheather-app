import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Units } from './units/units';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Units, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wheather-app');
}
