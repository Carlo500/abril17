import { Component } from '@angular/core';
import { Ejercicio1HijoMensajeComponent } from '../ejercicio1-hijo-mensaje/ejercicio1-hijo-mensaje.component';

@Component({
  selector: 'app-ejercicio1-padre-mensaje',
  standalone: true,
  imports: [Ejercicio1HijoMensajeComponent],
  templateUrl: './ejercicio1-padre-mensaje.component.html',
  styleUrl: './ejercicio1-padre-mensaje.component.css'
})
export class Ejercicio1PadreMensajeComponent {
  mensaje: string ="hola desde el padre";
}
