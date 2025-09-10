import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Eye, Home, Users, ShoppingBag, Tag, Stethoscope, Store } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  EyeIcon = Home;  // Ejemplo, cambia según el icono real que usabas
  StethoscopeIcon = Tag;

  navItems = [
    { id: 'home', label: 'Inicio', path: '/', icon: Home },
    { id: 'about', label: 'Nosotras', path: '/about', icon: Store },
    { id: 'market', label: 'Tienda', path: '/market', icon: Tag },
    { id: 'offers', label: 'Ofertas', path: '/offers', icon: Tag },
  ];
}
