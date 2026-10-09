import { Component, HostListener, signal } from '@angular/core';

@Component({ selector:'app-root', standalone:true, templateUrl:'./app.component.html', styleUrl:'./app.component.scss' })
export class AppComponent {
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly year = new Date().getFullYear();
  @HostListener('window:scroll') onScroll(): void { this.scrolled.set(window.scrollY > 24); }
  toggleMenu(): void { this.menuOpen.update((open) => !open); }
  closeMenu(): void { this.menuOpen.set(false); }
}
