import { Component } from '@angular/core';
import { WhatsappService } from '../../shared/services/whatsapp.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  activeCategory = 'all';

  constructor(private whatsapp: WhatsappService) {}

  categories = [
    { key: 'all', label: 'All Products' },
    { key: 'cctv', label: 'CCTV Cameras' },
    { key: 'walkie', label: 'Walkie-Talkies' },
    { key: 'metal', label: 'Metal Detectors' },
    { key: 'network', label: 'Network Equipment' }
  ];

  products = [
    {
      name: 'Dome CCTV Camera',
      category: 'cctv',
      description: 'Indoor dome camera with HD resolution, night vision, and wide-angle lens for comprehensive coverage.',
      image: 'https://images.pexels.com/photos/7508684/pexels-photo-7508684.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['1080p HD', 'Night Vision', 'Wide Angle']
    },
    {
      name: 'Bullet CCTV Camera',
      category: 'cctv',
      description: 'Outdoor weatherproof bullet camera with long-range infrared and motion detection.',
      image: 'https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Weatherproof', 'IR Night Vision', 'Motion Alert']
    },
    {
      name: 'PTZ Camera',
      category: 'cctv',
      description: 'Pan-Tilt-Zoom camera with remote control, auto-tracking, and 360° coverage.',
      image: 'https://images.pexels.com/photos/5581836/pexels-photo-5581836.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['360° Coverage', 'Auto Tracking', 'Remote Control']
    },
    {
      name: 'Professional Walkie-Talkie',
      category: 'walkie',
      description: 'Long-range professional two-way radio with noise cancellation and durable build.',
      image: 'https://images.pexels.com/photos/5733665/pexels-photo-5733665.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Long Range', 'Noise Cancel', 'Durable']
    },
    {
      name: 'Compact Walkie-Talkie',
      category: 'walkie',
      description: 'Lightweight and portable radio for small teams, events, and personal use.',
      image: 'https://images.pexels.com/photos/8591606/pexels-photo-8591606.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Lightweight', 'Easy to Use', 'Multi-Channel']
    },
    {
      name: 'Walk-Through Metal Detector',
      category: 'metal',
      description: 'High-sensitivity walk-through detector for entrances, events, and institutional security.',
      image: 'https://images.pexels.com/photos/32027096/pexels-photo-32027096.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Multi-Zone', 'High Sensitivity', 'Quick Setup']
    },
    {
      name: 'Handheld Metal Detector',
      category: 'metal',
      description: 'Portable scanner for security checkpoints, ideal for events and public venues.',
      image: 'https://images.pexels.com/photos/8285775/pexels-photo-8285775.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Portable', 'Rechargeable', 'LED & Vibration Alert']
    },
    {
      name: 'Network Switch',
      category: 'network',
      description: 'Managed network switch for enterprise LAN and server rack installations.',
      image: 'https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Managed', 'PoE Support', 'Rack Mount']
    },
    {
      name: 'Wireless Access Point',
      category: 'network',
      description: 'High-performance wireless AP for offices, campuses, and large coverage areas.',
      image: 'https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Dual Band', 'High Speed', 'Easy Deploy']
    }
  ];

  get filteredProducts() {
    if (this.activeCategory === 'all') return this.products;
    return this.products.filter(p => p.category === this.activeCategory);
  }

  setCategory(key: string) {
    this.activeCategory = key;
  }

  contactForPricing(event: Event, productName: string): void {
    event.preventDefault();
    this.whatsapp.open(`Hi, I'm interested in the ${productName}. Can you share details and pricing?`);
  }

  getCategoryLabel(key: string): string {
    return this.categories.find(c => c.key === key)?.label ?? key;
  }
}
