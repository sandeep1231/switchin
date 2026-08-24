import { Component, HostListener } from '@angular/core';
import { WhatsappService } from '../services/whatsapp.service';
declare var bootstrap: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})

export class NavbarComponent {
  currentSection: string = 'home';
  isShrunk = false;
  topBarHeight = 0;

  constructor(private whatsapp: WhatsappService) {}

  getQuote(event: Event): void {
    event.preventDefault();
    this.whatsapp.open("Hi, I'd like a quote");
    this.collapseMenu();
  }

  ngOnInit(): void {
    this.updateTopBarHeight();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['home', 'about', 'services', 'products', 'testimonials', 'contact'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          this.currentSection = section;
          break;
        }
      }
    }
    this.isShrunk = window.scrollY > 50;
    this.updateTopBarHeight();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateTopBarHeight();
  }

  private updateTopBarHeight(): void {
    const topBar = document.querySelector('.top-bar') as HTMLElement;
    if (topBar && window.innerWidth >= 992) {
      this.topBarHeight = this.isShrunk ? 0 : topBar.offsetHeight;
    } else {
      this.topBarHeight = 0;
    }
  }

  collapseMenu() {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  }
}
