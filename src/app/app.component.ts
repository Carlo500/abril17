import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoMensajeComponent } from './hijo-mensaje/hijo-mensaje.component';
import { PadreEventoComponent } from './padre-evento/padre-evento.component';
import { HijoEventoComponent } from './hijo-evento/hijo-evento.component';
import { Ejercicio1HijoMensajeComponent } from './ejercicio1-hijo-mensaje/ejercicio1-hijo-mensaje.component';
import { Ejercicio1PadreMensajeComponent } from './ejercicio1-padre-mensaje/ejercicio1-padre-mensaje.component';
import { FormsModule } from '@angular/forms';
import { Ejercicio3pComponent } from './ejercicio3p/ejercicio3p.component';
import { Ejercicio3hComponent } from './ejercicio3h/ejercicio3h.component';
import { Ejercicio4pComponent } from './ejercicio4p/ejercicio4p.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ejercicio4pComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril17';
}
