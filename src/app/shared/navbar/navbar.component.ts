import { Component, HostListener } from '@angular/core';
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
// menuOpen = false;

//   toggleIcon() {
//     this.menuOpen = !this.menuOpen;
//   }

//   collapseMenu() {
//     const navbar = document.getElementById('navbarNav');
//     if (navbar && navbar.classList.contains('show')) {
//       const bsCollapse = bootstrap.Collapse.getInstance(navbar);
//       if (bsCollapse) {
//         bsCollapse.hide();
//       }
//       this.menuOpen = false;
//     }
//   }
}
