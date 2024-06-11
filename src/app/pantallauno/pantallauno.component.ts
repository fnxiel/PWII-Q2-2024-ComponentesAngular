import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-pantallauno',
  standalone: true,
  imports: [],
  templateUrl: './pantallauno.component.html',
  styleUrl: './pantallauno.component.css'
})
export class PantallaunoComponent implements OnInit {
  titulo: string = ''
  mensaje: string = ''
  constructor(private ruta: ActivatedRoute, private notificaciones: NotificacionesService){}
  
  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params =>{
      this.titulo = params['titulo']
      this.mensaje = params['mensaje']

    })
  }

  agregarNotificacionPantallaUno(){
    this.notificaciones.agregarMensaje("Agregando mensaje desde pantalla uno")
  }
}
