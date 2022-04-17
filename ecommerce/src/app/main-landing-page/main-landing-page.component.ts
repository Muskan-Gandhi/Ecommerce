import { Component, OnInit } from '@angular/core';
declare var openNav:any;
declare var closeNav:any;
@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-page.component.html',
  styleUrls: ['./main-landing-page.component.css']
})
export class MainLandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new openNav();
    new closeNav();
  }

}
