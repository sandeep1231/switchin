import { Component, HostListener, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'switchin';
  ngOnInit() {
    AOS.init();
    this.onScroll();

    // Images and async content can change page layout after AOS calculates
    // its scroll-trigger offsets, leaving elements stuck mid-animation
    // (e.g. translateY(100px)) and creating visual gaps. Recalculate once
    // everything has actually loaded and settled.
    window.addEventListener('load', () => AOS.refresh());
    setTimeout(() => AOS.refresh(), 1000);
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('in-view');
      }
    });
  }
}


