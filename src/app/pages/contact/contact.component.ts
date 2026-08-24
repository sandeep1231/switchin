import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WhatsappService } from '../../shared/services/whatsapp.service';

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
    phone: '',
    subject: '',
    message: ''
  };

  constructor(private whatsapp: WhatsappService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    const parts = [
      `Name: ${this.contact.name}`,
      `Email: ${this.contact.email}`,
      this.contact.phone ? `Phone: ${this.contact.phone}` : '',
      this.contact.subject ? `Subject: ${this.contact.subject}` : '',
      `Message: ${this.contact.message}`
    ].filter(Boolean);
    this.whatsapp.open(parts.join('\n'));
    this.contact = { name: '', email: '', phone: '', subject: '', message: '' };
    form.resetForm();
  }
}
