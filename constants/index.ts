import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, discount} from "@/public/assets";

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
        id: "CTA",
        title: "Contact",
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
        title: "Fix It!",
        links: [
            {
                name: "business address",
                link: "https://maps.app.goo.gl",
        
            },
            {
                name: "GSM",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "business ",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "btw nummer here ",
                link: "https://www.hoobank.com/explore/",
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
        link: "https://www.linkedin.com",
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

// top page intro and discounts
export const heroData = {
    discountMessage: {
      icon: discount,
      text: " Discount For Your First Service!",
      highlight: "20%"
    },
    heading: "Tech Support Solutions",
    subheading: "Our dedicated team delivers next-generation tech support solutions directly to our clients. We focus on your unique needs and preferences, ensuring you receive expert assistance for all your devices."
  };
  
  export const billingText = {
    heading: "Seamlessly access your tech support & repair services.",
    paragraph: "Experience unparalleled service with our expert team. We specialize in providing comprehensive tech support tailored to your needs. From troubleshooting to repairs, we ensure that your technology runs smoothly, allowing you to focus on what matters most.",
  };
  
  export const cardDealText = {
    heading: "Find the best tech support solutions in just a few easy steps.",
    paragraph: "Our expert team is here to assist you, ensuring a seamless experience tailored to your needs. Let us handle your tech challenges so you can focus on what matters most.",
  };

  export const businessText = {
    heading: "You take care of your daily life, and we’ll take care of your tech.",
    paragraph: "With our dedicated support, you can enjoy peace of mind knowing your devices are in expert hands. Whether it's troubleshooting, repairs, or setup, we simplify technology for you, so you can focus on what matters most.",
  };