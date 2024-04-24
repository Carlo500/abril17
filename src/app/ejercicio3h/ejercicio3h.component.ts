import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3h',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3h.component.html',
  styleUrl: './ejercicio3h.component.css'
})
export class Ejercicio3hComponent {
  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();
  
  lenguajes:string[]=['Java','JSON','JS','CSS','Angular'];
  modelName: string='';

  enviarPadre() {
    this.llamadaPadre.emit(this.modelName);
    }

    
}
