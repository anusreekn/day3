import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./component/navbar/navbar";
import { Card } from "./component/card/card";
import { Carousel } from "./component/carousel/carousel";
import { Footer } from "./component/footer/footer";
import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Card, Carousel, Footer, Home, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
