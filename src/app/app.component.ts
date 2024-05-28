import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticia } from './interfaces/INoticia';
import { NoticiaComponent } from './noticia/noticia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoticiaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo';
  saludo = 'Mi nombre es Luke';
  descripcion = 'Esta es una pagina basica'

  noticias: INoticia[] = [
    {
      titulo: 'El ultimo glaciar de venezuela',
      resumen: 'Es un ejemplo de lo que pasará en Colombia y Ecuador',
      fecha: new Date(),
      img: {
        src: "https://ichef.bbci.co.uk/ace/ws/450/cpsprodpb/9216/live/bb1a3a20-1777-11ef-952e-d3a3375d552f.jpg",
        alt: "Foto glaciar venezuela"
      },
      enlace: 'https://www.bbc.com/mundo/articles/cgrrk95jwe6o',
      //destacado: false
    },
    {
      titulo: 'Otra noticia importante',
      resumen: 'Leer mas acerca de esta noticia',
      fecha: new Date(),
      img: {
        src: "https://picsum.photos/200/300",
        alt: "Foto generica"
      },
      enlace: 'https://www.google.com',
      //destacado: false
    },
    {
      titulo: 'Una noticia no tan importante',
      resumen: 'Leer mas acerca de esta noticia',
      fecha: new Date(),
      img: {
        src: "https://picsum.photos/25/200/300",
        alt: "Foto generica"
      },
      enlace: 'https://www.google.com',
      //destacado: false
    },
  ]
}
