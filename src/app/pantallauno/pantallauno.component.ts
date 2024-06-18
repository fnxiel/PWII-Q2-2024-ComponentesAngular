import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from '../notificaciones.service';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-pantallauno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pantallauno.component.html',
  styleUrl: './pantallauno.component.css'
})
export class PantallaunoComponent implements OnInit {
  titulo: string = ''
  mensaje: string = ''

  criterioBusqueda: string = ''
  descripcion: string = ''

  constructor(
    private ruta: ActivatedRoute, 
    private notificaciones: NotificacionesService,
    private servicioProductos: ProductosService
  ){}
  
  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params =>{
      this.titulo = params['titulo']
      this.mensaje = params['mensaje']

    })
    this.servicioProductos.getProductos()
  }

  agregarNotificacionPantallaUno(){
    this.notificaciones.agregarMensaje("Agregando mensaje desde pantalla uno")
  }
}
