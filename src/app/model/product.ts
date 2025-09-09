export interface Product {
    id: number;
    name: string;
    category: 'glasses' | 'sunglasses' | 'contacts' | 'accessories';
    price: number;
    originalPrice: number;
    rating: number;
    image: string;
    description: string;
    features: string[];
}
