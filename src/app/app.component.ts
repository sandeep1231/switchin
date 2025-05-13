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


