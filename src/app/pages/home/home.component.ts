import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent {
  services = [
    { title: 'CCTV Installation', description: 'Complete surveillance solutions for homes and businesses.' },
    { title: 'Tower Setup', description: 'Network towers installation and maintenance services.' },
    { title: 'Walkie-Talkie Support', description: 'Sales and support of radio communication devices.' }
  ];

  products = [
    {
      title: 'HD CCTV Camera',
      description: 'High-definition camera for 24/7 monitoring.',
      image: 'https://via.placeholder.com/400x250?text=CCTV+Camera'
    },
    {
      title: 'Walkie-Talkie',
      description: 'Reliable short-range radio communication device.',
      image: 'https://via.placeholder.com/400x250?text=Walkie+Talkie'
    },
    {
      title: 'Metal Detector',
      description: 'Security-grade metal detection equipment.',
      image: 'https://via.placeholder.com/400x250?text=Metal+Detector'
    }
  ];
}
