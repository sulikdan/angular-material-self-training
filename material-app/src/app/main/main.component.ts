import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
