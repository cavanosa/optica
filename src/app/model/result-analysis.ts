export interface ResultAnalysis {
    level: string;
    color: string;
    bgColor: string;
    borderColor: string;
    icon: any;
    message: string;
    recommendation: string;
    urgency: 'low' | 'medium' | 'high';
}
