import { Component } from '@angular/core';
import { WhatsappService } from '../../shared/services/whatsapp.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone: false
})
export class ServicesComponent {
  constructor(private whatsapp: WhatsappService) {}
  services = [
    {
      title: 'CCTV Surveillance Systems',
      description: 'HD & IP camera systems — dome, bullet, and PTZ — designed, installed, and configured for complete site coverage with remote viewing on your phone.',
      icon: 'bi-camera-video-fill',
      features: ['Dome, bullet & PTZ cameras', 'HD / IP camera mounting', 'DVR/NVR configuration', 'Remote mobile access setup']
    },
    {
      title: 'Walkie-Talkie Communication Devices',
      description: 'Professional and compact two-way radios provisioned and programmed for your team, with frequency licensing and repeater setup handled end-to-end.',
      icon: 'bi-broadcast-pin',
      features: ['Professional & compact radios', 'Frequency planning & licensing', 'Repeater installation', 'Fleet programming & training']
    },
    {
      title: 'Walkie-Talkie Dealership & Service',
      description: 'Authorized sales of leading walkie-talkie brands, plus in-house repair and maintenance to keep your existing fleet running reliably.',
      icon: 'bi-shop',
      features: ['New unit sales', 'Repair & servicing', 'Preventive maintenance', 'Genuine spare parts']
    },
    {
      title: 'Walkie-Talkie Accessories',
      description: 'Batteries, antennas, chargers, and other genuine accessories to extend the range, runtime, and lifespan of your communication devices.',
      icon: 'bi-battery-charging',
      features: ['Batteries & chargers', 'Antennas', 'Headsets & mics', 'Carry cases & clips']
    },
    {
      title: 'Walkie-Talkie Rentals',
      description: 'Short-term and long-term walkie-talkie rentals for events, construction sites, and temporary teams — no upfront purchase required.',
      icon: 'bi-calendar-range',
      features: ['Short-term event rentals', 'Long-term site rentals', 'Bulk fleet availability', 'Same-day setup support'],
      link: '/walkie-talkie-rental'
    },
    {
      title: 'Metal Detection Equipment',
      description: 'Walk-through and handheld metal detectors, professionally installed and calibrated for venues, schools, and government checkpoints.',
      icon: 'bi-shield-check',
      features: ['Walk-through gate setup', 'Handheld scanners', 'Sensitivity calibration', 'Compliance advisory']
    },
    {
      title: 'Tower Setup & Network Infrastructure',
      description: 'End-to-end network tower erection and infrastructure setup — structural analysis, permitting support, antenna mounting, and preventive maintenance.',
      icon: 'bi-reception-4',
      features: ['Structural survey', 'Tower erection', 'Antenna & cable routing', 'Preventive maintenance']
    },
    {
      title: 'IT Consulting & Infrastructure Design',
      description: 'We assess, design, and deploy LAN/WAN networks, server rooms, and structured cabling — helping you modernize operations.',
      icon: 'bi-pc-display',
      features: ['Network design & audit', 'Structured cabling', 'Server room setup', 'System integration']
    },
    {
      title: 'Laptop Rentals',
      description: 'Short-term and long-term laptop rentals for corporate training, events, temporary staff, and business travel — no upfront purchase required.',
      icon: 'bi-laptop',
      features: ['Short-term event rentals', 'Long-term corporate rentals', 'Bulk fleet availability', 'Pre-configured & ready to use'],
      link: '/laptop-rental'
    },
    {
      title: 'AMC & Technical Support',
      description: 'Annual Maintenance Contracts covering scheduled inspections, priority repairs, and round-the-clock technical support for all our systems.',
      icon: 'bi-tools',
      features: ['Annual contracts', 'Scheduled inspections', 'Priority on-site repairs', '24/7 remote support']
    }
  ];

  inquireAboutService(event: Event, serviceTitle: string): void {
    event.preventDefault();
    this.whatsapp.open(`Hi, I'm interested in your ${serviceTitle} service. Can you share more details?`);
  }

  talkToExperts(event: Event): void {
    event.preventDefault();
    this.whatsapp.open('Hi, I need a custom solution. Can we discuss?');
  }
}
