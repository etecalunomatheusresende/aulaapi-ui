import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Aula';

  categorias = [
    {id: '1', nome: 'Informatica'},
    {id: '2', nome: 'Escritorio'},
    {id: '3', nome: 'Perfumaria'},
    {id: '4', nome: 'Lazer'}
  ]
}
