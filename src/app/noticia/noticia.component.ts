import { Component, Input } from '@angular/core';
import { INoticia } from '../interfaces/INoticia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {
  @Input() noticia: INoticia = {
    titulo: 'El ultimo glaciar de venezuela',
    resumen: 'Es un ejemplo de lo que pasará en Colombia y Ecuador',
    fecha: new Date(),
    img: {
      src: "https://ichef.bbci.co.uk/ace/ws/450/cpsprodpb/9216/live/bb1a3a20-1777-11ef-952e-d3a3375d552f.jpg",
      alt: "Foto glaciar venezuela"
    },
    enlace: 'https://www.bbc.com/mundo/articles/cgrrk95jwe6o',
    //destacado: false
  }
  @Input() destacado: boolean = true
}
