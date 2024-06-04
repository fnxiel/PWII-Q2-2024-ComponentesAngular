import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  conteo: number = 0
  error: boolean = false

  validarContador(){
    return !isNaN(this.conteo)
  }

  aumentarContador(){
    if(this.validarContador()){
      this.conteo = this.conteo + 1
      this.error = false
    } else{
      this.error = true
    }
  } 

  disminuirContador(){
    if(this.validarContador()){
      if(this.conteo-1 < 0){
        this.conteo = 0
      } else{
        this.conteo = this.conteo - 1
        this.error = false
      }
    } else{
      this.error = true
    }
  }
}
