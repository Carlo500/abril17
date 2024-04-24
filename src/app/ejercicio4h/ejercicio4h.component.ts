import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4h',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4h.component.html',
  styleUrl: './ejercicio4h.component.css'
})
export class Ejercicio4hComponent {

  @Output()
  llamadaPadre:EventEmitter<any> = new EventEmitter();
  nombre:string=" ";
  edad: string=" ";
  persona:string="";

  enviarPadre() {
    this.persona= this.nombre+this.edad;
    this.llamadaPadre.emit(this.persona);
    }
}
