import { Component, OnInit, Input } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// export class MisElementos {    
//   Value: string;    
//   constructor(Value:string)    
//   {    
//     this.Value = Value;    
//   }    
// }    

interface Ianimal {
    nombreAnimal: string; 
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
  
})

export class AppComponent {
  title = 'Mi arreglo de animales';
  public misElementos: Array<Ianimal> = [];    
 
  agregarElemento() {    
    //this.misElementos.push(this.nuevoElemento);    

    const aanimal: Ianimal= this.fAnimal.value;
    this.misElementos.push(aanimal);    
    this.nuevoElemento = this.misElementos;    
    
  } 
  
  eliminarElemento(i) {  

  var confirma = false;
  confirma = confirm('Seguro de eliminar a este animalito??');
  if(confirma){
    this.misElementos.splice(i, 1);  
    alert("Eliminacion aplicada ;-( ");
  }else{
    alert("Cancelo la eliminacion :-)");
  }
  

      
  }  
 
  IsForUpdate: boolean = false;    
  nuevoElemento: any = {};    
  actualizarElemento;    
    
  public fAnimal: FormGroup = this.fb.group({});


 // constructor()    
 // {    
  //   this.misElementos.push(    
  //     new MisElementos("Primero"),    
  //     new MisElementos("Segundo"),    
  //     new MisElementos("Tercero"),    
  //     new MisElementos("Cuarto"),    
  //     new MisElementos("Quinto")    
  //   );    
  // }     

 constructor(private fb: FormBuilder){
    this.fAnimal = this.crearformulario();
 }

 crearformulario(){
  return this.fb.group({
      nombreAnimal: [null,[Validators.required]]
  });

 }

}



