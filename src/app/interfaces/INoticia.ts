import { IImagen } from "./IImagen"

export interface INoticia{
    titulo: string
    resumen : string
    fecha: Date 
    img: IImagen
    enlace: string
    //destacado: boolean
}

