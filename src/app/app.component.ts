import { Component } from '@angular/core';
import { usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: usuario[]=[
    new usuario ("Osama bin Laden"),
    new usuario ("Naruto Uzumaki"),
    new usuario ("Junker Otto Eduard Leopold von Bismark")
  ]

  // users = [
  //   {ID:1, name: "Osama bin Laden"},
  //   {ID:2, name: "Naruto Uzumaki"},
  //   {ID:3, name: "Junker Otto Eduard Leopold von Bismarck"}
  // ];

  cuadroNombre:string="";
agregarSe: any;

  agregar_usuario(){
    let mi_usuario = new usuario(this.cuadroNombre);
    this.users.push(mi_usuario);
  }
}