export interface FeatredCardProps {
    icon: string;
    title: string;
    content: string;
    index: number;
}

export interface ButtonProps {
    styles: string;
    toggleVisibility: () => void;
}  

export interface FeedBackProps {
    content: string;
    title: string;
    name: string;
    img: string | any;
}