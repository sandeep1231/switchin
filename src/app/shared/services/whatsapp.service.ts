import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly numbers = ['918249762491', '919778177995'];

  open(message: string): void {
    const text = encodeURIComponent(message);
    this.numbers.forEach(phone => {
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
  }
}
