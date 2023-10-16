export class usuario {

    constructor(nombre:string, email:string, foto?:File){
        this.nombre=nombre;
        this.email=email;
        this.foto=foto;
    }

    nombre:string="";
    email:string="";
    foto?:File;
}