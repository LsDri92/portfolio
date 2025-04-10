import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  standalone: true,
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ContactModalComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  form = {
    name: '',
    email: '',
    message: '',
  };

  close() {
    this.closed.emit();
  }

  sendEmail() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Por favor completá todos los campos.');
      return;
    }

    emailjs
      .send(
        'service_uh9mb3c', // Reemplazá con tu Service ID
        'template_rpo90kk', // Reemplazá con tu Template ID
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
        },
        'gPhm4EFalgKx3KrHG' // Reemplazá con tu Public Key
      )
      .then(() => {
        alert('¡Mensaje enviado con éxito!');
        this.form = { name: '', email: '', message: '' };
        this.close();
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Ocurrió un error al enviar el mensaje.');
      });
  }
}
