import { Component } from '@angular/core';
import { Navbar } from "../../component/navbar/navbar";
import { Card } from "../../component/card/card";
import { Carousel } from "../../component/carousel/carousel";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Card, Carousel, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
