import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swagger',
  templateUrl: './swagger.component.html'
})
export class SwaggerUIComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://central-de-erros-api.herokuapp.com/api/v1/swagger-ui.html';
  }

}