import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Eye, Funnel, LucideAngularModule, ShoppingCartIcon, Star } from 'lucide-angular';
import { Product } from '../../model/product';

@Component({
  selector: 'app-market',
  imports: [ CommonModule, LucideAngularModule ],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {
  selectedCategory: 'all' | 'glasses' | 'sunglasses' | 'contacts' | 'accessories' = 'all';

  EyeIcon = Eye;
  Funnel = Funnel
  StarIcon = Star;
  ShoppingCartIcon = ShoppingCartIcon;

  categories = [
    { id: 'all' as const, label: 'Todos los Productos' },
    { id: 'glasses' as const, label: 'Lentes Graduados' },
    { id: 'sunglasses' as const, label: 'Lentes de Sol' },
    { id: 'contacts' as const, label: 'Lentes de Contacto' },
    { id: 'accessories' as const, label: 'Accesorios' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Monturas Clásicas Premium',
      category: 'glasses',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Monturas de acetato de alta calidad con diseño atemporal',
      features: ['Acetato premium', 'Ajuste personalizable', 'Garantía 2 años']
    },
    {
      id: 2,
      name: 'Lentes de Sol Deportivos',
      category: 'sunglasses',
      price: 189,
      originalPrice: 249,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Protección UV400 con tecnología polarizada',
      features: ['Polarizados', 'UV400', 'Resistente al agua']
    },
    {
      id: 3,
      name: 'Lentes de Contacto Diarios',
      category: 'contacts',
      price: 45,
      originalPrice: 55,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Caja de 30 lentes de contacto diarios ultra cómodos',
      features: ['Uso diario', 'Hidratación 24h', 'Fácil inserción']
    },
    {
      id: 4,
      name: 'Monturas Titanio Ultraligeras',
      category: 'glasses',
      price: 449,
      originalPrice: 599,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Monturas de titanio con peso pluma y máxima durabilidad',
      features: ['Titanio puro', 'Ultraligero', 'Hipoalergénico']
    },
    {
      id: 5,
      name: 'Lentes de Sol Aviador',
      category: 'sunglasses',
      price: 159,
      originalPrice: 199,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Diseño aviador clásico con cristales de alta calidad',
      features: ['Diseño clásico', 'Cristales premium', 'Estuche incluido']
    },
    {
      id: 6,
      name: 'Kit de Limpieza Premium',
      category: 'accessories',
      price: 29,
      originalPrice: 39,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Kit completo para el cuidado de tus lentes',
      features: ['Spray limpiador', 'Paño microfibra', 'Estuche rígido']
    },
  ];

  get filteredProducts(): Product[] {
    return this.selectedCategory === 'all' 
      ? this.products 
      : this.products.filter(product => product.category === this.selectedCategory);
  }

  getCategoryButtonClass(categoryId: string): string {
    const baseClass = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
    return this.selectedCategory === categoryId
      ? `${baseClass} bg-blue-600 text-white`
      : `${baseClass} bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600`;
  }

  getDiscountPercentage(product: Product): number {
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }

  getStarArray(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  getStarClass(starNumber: number, rating: number): string {
    return starNumber <= Math.floor(rating)
      ? 'w-4 h-4 text-yellow-400 fill-current'
      : 'w-4 h-4 text-gray-300';
  }

  getRandomReviews(): number {
    return Math.floor(Math.random() * 50) + 10;
  }
}
