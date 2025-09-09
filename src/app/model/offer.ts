export interface Offer {
    id: number;
    title: string;
    description: string;
    discount: string;
    validUntil: string;
    terms: string[];
    image: string;
    category: string;
    featured: boolean;
}
