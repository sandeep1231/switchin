import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'SwitchIn installed CCTV cameras across our entire school campus. The image quality is excellent and the remote monitoring feature gives us immense peace of mind. Highly recommended!',
      name: 'Rajesh Kumar',
      designation: 'School Administrator',
      rating: 5
    },
    {
      text: 'We rely on SwitchIn for all our walkie-talkie communication needs. Their devices are durable, the range is impressive, and the support team is always responsive.',
      name: 'Priya Patel',
      designation: 'Event Manager',
      rating: 5
    },
    {
      text: 'Professional team with great attention to detail. They set up our complete security infrastructure including CCTV, metal detectors, and access control systems.',
      name: 'Amit Mohanty',
      designation: 'Business Owner',
      rating: 5
    },
    {
      text: 'The metal detection systems provided by SwitchIn have greatly enhanced security at our events. Setup was quick and the team provided thorough training.',
      name: 'Sneha Rao',
      designation: 'Venue Manager',
      rating: 5
    },
    {
      text: 'Excellent IT consulting services. They helped us design our complete network infrastructure from scratch. Very knowledgeable and professional team.',
      name: 'Deepak Mishra',
      designation: 'IT Director',
      rating: 5
    },
    {
      text: 'We have an AMC with SwitchIn for our surveillance systems. Their response time is fantastic and the regular maintenance keeps everything running perfectly.',
      name: 'Sunita Behera',
      designation: 'Hospital Administrator',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
