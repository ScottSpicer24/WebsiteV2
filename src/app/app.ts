import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingScreen } from './components/landing-screen/landing-screen';
import { Timeline } from './components/timeline/timeline';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingScreen, Timeline],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortfolioV2');
}
