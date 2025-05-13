import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent {
  currentSection: string = 'home';

  isShrunk = false;

@HostListener('window:scroll', [])
onScroll(): void {
  const sections = ['home', 'about', 'services', 'contact'];
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        this.currentSection = section;
        break;
      }
    }
  }

  this.isShrunk = window.scrollY > 50;
}
}
