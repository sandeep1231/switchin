import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const phone = '918249762491'; // WhatsApp number without +
    const msg = `Name: ${this.contact.name}%0AEmail: ${this.contact.email}%0AMessage: ${this.contact.message}`;
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, '_blank');
    this.contact = { name: '', email: '', message: '' };
  }
}
