import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  processSteps = [
    { icon: 'bi-chat-left-text', title: 'Consultation', desc: 'We listen to your needs, assess the site, and recommend the best-fit security or communication solution.' },
    { icon: 'bi-pencil-square', title: 'Custom Design', desc: 'Our engineers design a tailored solution — camera placements, network topology, or equipment specs.' },
    { icon: 'bi-tools', title: 'Installation', desc: 'Certified technicians handle professional installation with minimal disruption to your operations.' },
    { icon: 'bi-headset', title: 'Ongoing Support', desc: 'We stay with you — annual maintenance contracts, remote monitoring, and 24/7 technical assistance.' }
  ];
}
