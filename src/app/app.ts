import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingScreen } from './components/landing-screen/landing-screen';
import { Timeline } from './components/timeline/timeline';
import { Skills } from "./components/skills/skills";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingScreen, Timeline, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortfolioV2');
}
