import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent {
  stats = [
    { icon: 'bi-people-fill', value: '200+', label: 'Happy Clients' },
    { icon: 'bi-clipboard-check-fill', value: '500+', label: 'Projects Completed' },
    { icon: 'bi-award-fill', value: '8+', label: 'Years Experience' },
    { icon: 'bi-headset', value: '24/7', label: 'Customer Support' }
  ];

  whyChoose = [
    { icon: 'bi-gem', title: 'Quality Products', desc: 'Only the best equipment from trusted manufacturers at competitive prices.' },
    { icon: 'bi-person-gear', title: 'Expert Team', desc: 'Certified technicians delivering flawless installation and ongoing support.' },
    { icon: 'bi-wrench-adjustable', title: 'Full Service', desc: 'Consultation, installation, and maintenance — everything end-to-end.' },
    { icon: 'bi-building-check', title: 'Trusted Partner', desc: 'Relied upon by government, schools, hospitals, and enterprises across Odisha.' }
  ];
}
