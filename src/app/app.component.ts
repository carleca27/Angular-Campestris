import { Component } from '@angular/core';
import { usuario } from './usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get username() {
    return this.userData.get('username')
  }
  
  get email() {
    return this.userData.get('email')
  }
  
  users: usuario[]=[
    new usuario ("Osama bin Laden", "califatodeAfganistán@bombmail.com"),
    new usuario ("Naruto Uzumaki", "konohanohokage@rasengan-mail.com"),
    new usuario ("Junker Otto Eduard Leopold von Bismark", "hitlergranny@hotmail.com")
  ]

  userData = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
  });
  

  cuadroNombre:string = '';
  cuadroEmail:string = '';

  cuadroFoto: File | undefined;
  onFileSelected(event:any){
    const file: File = event.target.files[0];
    this.cuadroFoto = file;
  }

  agregar_usuario(){
    let mi_usuario = new usuario(this.cuadroNombre ?? '', this.cuadroEmail ?? '', this.cuadroFoto);
    this.users.push(mi_usuario);  
  }

  getUrl(file: File): string | ArrayBuffer | null {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return reader.result;
    };

    return null;
  }
       
  vacio: string="";
  mostrar_vacio: boolean=false;
  rojo_nombre: boolean=false;
  rojo_email: boolean=false;

  process_button(){
    if (this.cuadroNombre==="" || this.cuadroEmail==="")
      {
        this.mostrar_vacio=true; 
        this.vacio="Te faltan cosas, perro o perra judío o judía.";
      }
    else 
      {
        this.mostrar_vacio=false;
        this.agregar_usuario();
        this.vacio="";
      }

      if (this.cuadroNombre==="") {this.rojo_nombre=true}
      else {this.rojo_nombre=false}

      if (this.cuadroEmail==="") {this.rojo_email=true}
      else {this.rojo_email=false}
  }
}