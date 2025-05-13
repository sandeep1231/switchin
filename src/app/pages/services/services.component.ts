import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  standalone: false
})
export class ServicesComponent {
    services = [
        {
          title: 'Advanced CCTV solutions',
          description: 'Enhance security with our state-of-the-art CCTV camera systems.',
          image: 'https://images.unsplash.com/photo-1581090700227-1e8e1f98d3ec?auto=format&fit=crop&w=700&q=80'
        },
        {
          title: 'Walkie-talkie communication devices',
          description: 'Stay connected with our reliable walkie-talkie devices for any situation.',
          image: 'https://images.unsplash.com/photo-1600607689929-c7335f89a527?auto=format&fit=crop&w=700&q=80'
        },
        {
          title: 'Metal detection equipment',
          description: 'Discover hidden treasures with our advanced metal detection devices.',
          image: 'https://images.unsplash.com/photo-1622021068890-cf82d4dc83f9?auto=format&fit=crop&w=700&q=80'
        }
      ];
}
