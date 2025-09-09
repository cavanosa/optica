import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule, Eye, Home, Users, ShoppingBag, Tag, Stethoscope } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() currentView!: 'home' | 'about' | 'market' | 'offers';
  @Output() navigate = new EventEmitter<'home' | 'about' | 'market' | 'offers'>();
  @Output() startTest = new EventEmitter<void>();

  EyeIcon = Eye;
  StethoscopeIcon = Stethoscope;

  navItems = [
    { id: 'home' as const, label: 'Inicio', icon: Home },
    { id: 'about' as const, label: 'Nosotras', icon: Users },
    { id: 'market' as const, label: 'Productos', icon: ShoppingBag },
    { id: 'offers' as const, label: 'Ofertas', icon: Tag },
  ];

   getNavItemClass(itemId: string): string {
    const baseClass = 'px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200';
    return this.currentView === itemId
      ? `${baseClass} bg-blue-100 text-blue-700`
      : `${baseClass} text-gray-600 hover:text-blue-600 hover:bg-blue-50`;
  }

  getMobileNavItemClass(itemId: string): string {
    const baseClass = 'w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-200';
    return this.currentView === itemId
      ? `${baseClass} bg-blue-100 text-blue-700`
      : `${baseClass} text-gray-600 hover:text-blue-600 hover:bg-blue-50`;
  }

}
