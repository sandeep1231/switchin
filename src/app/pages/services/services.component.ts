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
      title: 'CCTV Installation & Monitoring',
      description: 'We design, install, and configure complete HD & IP surveillance systems — from camera placement to remote viewing setup on your phone.',
      icon: 'bi-camera-video-fill',
      features: ['Site survey & planning', 'HD / IP camera mounting', 'DVR/NVR configuration', 'Remote mobile access setup']
    },
    {
      title: 'Walkie-Talkie Deployment',
      description: 'We provision and program two-way radio fleets for your teams — frequency licensing, repeater setup, and hands-on training included.',
      icon: 'bi-broadcast-pin',
      features: ['Frequency planning', 'Repeater installation', 'Fleet programming', 'User training sessions']
    },
    {
      title: 'Metal Detector Setup',
      description: 'Professional installation and calibration of walk-through and handheld metal detectors for venues, schools, and government checkpoints.',
      icon: 'bi-shield-check',
      features: ['Walk-through gate setup', 'Sensitivity calibration', 'Handheld scanner training', 'Compliance advisory']
    },
    {
      title: 'Tower Installation & Maintenance',
      description: 'End-to-end network tower erection — structural analysis, permitting support, antenna mounting, and ongoing preventive maintenance.',
      icon: 'bi-reception-4',
      features: ['Structural survey', 'Tower erection', 'Antenna & cable routing', 'Preventive maintenance']
    },
    {
      title: 'IT Infrastructure Consulting',
      description: 'We assess, design, and deploy LAN/WAN networks, server rooms, and structured cabling — helping you modernize operations.',
      icon: 'bi-pc-display',
      features: ['Network design & audit', 'Structured cabling', 'Server room setup', 'System integration']
    },
    {
      title: 'AMC & Technical Support',
      description: 'Stay worry-free with our annual maintenance contracts — scheduled inspections, priority repairs, and round-the-clock remote support.',
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
