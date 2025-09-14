import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero} from './hero/hero';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Services } from './services/services';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Navbar,About,Hero,Contact,Services,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LSDconsulting');
}
