import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  onSubmit(): void {
    console.log('Formulario enviado con éxito');
    alert('¡Gracias por unirte a RecyLoop!');
  }
}
