export interface TestQuestion {
    id: number;
    title: string;
    description: string;
    image: string;
    options: { text: string; score: number }[];
}
