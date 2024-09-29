import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "@/public/assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "product",
        title: "Service",
    },
    {
        id: "clients",
        title: "Clients",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Expert Support",
        content:
            "Our dedicated team provides tailored tech solutions and support, ensuring you get the best help for your devices.",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "100% Secure Services",
        content:
            "We prioritize your privacy, taking proactive measures to ensure your information and service requests are always protected.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Quick Repairs",
        content:
            "Our efficient repair services save you time and hassle, allowing you to get back to your daily routine with minimal disruption.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Fix It! solved my computer issues in no time. Quick, professional, and hassle-free!",
        name: "Liesbeth Jansen",
        title: "Home Office User",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "I finally found a tech service I can trust. They explained everything clearly and fixed the problem fast.",
        name: "Mark Van der Meulen",
        title: "Busy Professional",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "Incredible service! My laptop was up and running in no time, and the support was top-notch.",
        name: "Jasper De Vos",
        title: "Remote worker",
        img: people03,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "Customer Satisfaction",
        value: "99%",
    },
    {
        id: "stats-2",
        title: "Tech Issues Resolved",
        value: "300+",
    },
    {
        id: "stats-3",
        title: "Successful Repairs Completed",
        value: "400+",
    },
];

export const footerLinks = [
    {
        id: "footerLinks-1",
        title: "Useful Links",
        links: [
            {
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        id: "footerLinks-2",
        title: "Community",
        links: [
            {
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        id: "footerLinks-3",
        title: "Partner",
        links: [
            {
                name: "Our Partner",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];