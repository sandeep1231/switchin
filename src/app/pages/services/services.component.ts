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
          image: 'https://cdn.b12.io/client_media/ueFzL4jO/e36fa986-3005-11f0-abd0-0242ac110002-jpg-hero_image.jpeg'
        },
        {
          title: 'Walkie-talkie communication devices',
          description: 'Stay connected with our reliable walkie-talkie devices for any situation.',
          image: 'https://cdn.b12.io/client_media/ueFzL4jO/e3ddf1ca-3005-11f0-abd0-0242ac110002-jpg-hero_image.jpeg'
        },
        {
          title: 'Metal detection equipment',
          description: 'Discover hidden treasures with our advanced metal detection devices.',
          image: 'https://cdn.b12.io/client_media/ueFzL4jO/e3af2b42-3005-11f0-abd0-0242ac110002-jpg-hero_image.jpeg'
        }
      ];
}
