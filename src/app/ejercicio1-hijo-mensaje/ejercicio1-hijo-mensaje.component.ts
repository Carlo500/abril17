import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio1-hijo-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1-hijo-mensaje.component.html',
  styleUrl: './ejercicio1-hijo-mensaje.component.css'
})
export class Ejercicio1HijoMensajeComponent {
  @Input() mensajeRecibido: string='';
}
