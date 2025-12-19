import { Component } from '@angular/core';
import { Navbar } from "../../component/navbar/navbar";
import { Footer } from "../../component/footer/footer";
import { Form } from "../../component/form/form";
import { Map } from "../../component/map/map";

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, Form, Map],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
