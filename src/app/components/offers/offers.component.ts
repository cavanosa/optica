import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Calendar, Clock, Gift, LucideAngularModule, Percent, Star, Tag } from 'lucide-angular';
import { Offer } from '../../model/offer';

@Component({
  selector: 'app-offers',
  imports: [ CommonModule, LucideAngularModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  TagIcon = Tag;
  ClockIcon = Clock;
  GiftIcon = Gift;
  PercentIcon = Percent;
  StarIcon = Star;
  CalendarIcon = Calendar;

  offers: Offer[] = [
    {
      id: 1,
      title: '2x1 en Lentes Graduados',
      description: 'Compra un par de lentes graduados y llévate el segundo completamente gratis',
      discount: '50%',
      validUntil: '2024-03-31',
      terms: ['Aplica en monturas seleccionadas', 'El segundo par debe ser de igual o menor valor', 'No acumulable con otras promociones'],
      image: 'https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Lentes Graduados',
      featured: true
    },
    {
      id: 2,
      title: 'Descuento Estudiantes',
      description: 'Estudiantes universitarios obtienen 25% de descuento en toda la tienda',
      discount: '25%',
      validUntil: '2024-12-31',
      terms: ['Presentar credencial estudiantil vigente', 'Válido para estudiantes universitarios', 'Aplica en productos regulares'],
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Descuento Especial',
      featured: false
    },
    {
      id: 3,
      title: 'Paquete Familiar',
      description: 'Examen de vista + lentes graduados para toda la familia desde $199 por persona',
      discount: '40%',
      validUntil: '2024-04-15',
      terms: ['Mínimo 3 personas', 'Incluye examen completo', 'Monturas básicas incluidas'],
      image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Paquete Familiar',
      featured: true
    },
    {
      id: 4,
      title: 'Lentes de Sol Premium',
      description: 'Hasta 30% de descuento en lentes de sol de marcas premium',
      discount: '30%',
      validUntil: '2024-03-20',
      terms: ['Marcas seleccionadas', 'Stock limitado', 'Protección UV garantizada'],
      image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Lentes de Sol',
      featured: false
    },
    {
      id: 5,
      title: 'Lentes de Contacto Anuales',
      description: 'Compra tu suministro anual de lentes de contacto con 20% de descuento',
      discount: '20%',
      validUntil: '2024-05-01',
      terms: ['Suministro para 12 meses', 'Incluye revisiones trimestrales', 'Marcas premium disponibles'],
      image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Lentes de Contacto',
      featured: false
    },
    {
      id: 6,
      title: 'Renovación de Lentes',
      description: 'Clientes existentes obtienen 15% de descuento en su renovación',
      discount: '15%',
      validUntil: '2024-06-30',
      terms: ['Solo para clientes registrados', 'Historial de compra requerido', 'Válido una vez por año'],
      image: 'https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cliente Frecuente',
      featured: false
    }
  ];

  get featuredOffers(): Offer[] {
    return this.offers.filter(offer => offer.featured);
  }

  get regularOffers(): Offer[] {
    return this.offers.filter(offer => !offer.featured);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  getDaysRemaining(dateString: string): number {
    const today = new Date();
    const endDate = new Date(dateString);
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

}
