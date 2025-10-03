import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


export const navbarLinks = [
    { title: "home", href: '/' },
    {
        title: "about us", href: "/about-us", dropDown: [
            { title: "who we are", href: "/about-us" },
            { title: "our mission & vision", href: '/about-us' },
            { title: "Key management", href: '/about-us' },
            { title: "our team", href: '/about-us' }
        ]
    },
    {
        title: "services", href: "/services", dropDown: [
            { title: "laboratory services", href: "/services12" },
            { title: "Imaging services", href: "/services1" },
            { title: "cardia services", href: "/services2" },
            { title: "respiratory services", href: "/services3" },
            { title: "bone health services", href: "/services4" },
            { title: "women health services", href: "/services5" },
            { title: "dental services", href: "/services6" },
            { title: "Neuro services", href: "/services7" },
            { title: "covid-19 diagonstics", href: "/services8", dropDown: [
                    { title: "covid-19 testing", href: "/services9" },
                    { title: "covid-19 spike2 antibody test", href: "/services0" }
            ]},
            {title:"all services", href:"/services11"}
        ]
    },
    {title:"location", href:"/location"},
    { title: 'jobs', href: "/jobs" },
    { title: 'contact us', href: "/contact-us" }
]



export const socialLinks = [
    { title: "Twitter", to: "https://twitter.com/", icon: Twitter },
    { title: "Facebook", to: "https://facebook.com", icon: Facebook },
    { title: "Instagram", to: "https://instagram.com", icon: Instagram },
    { title: "LinkedIn", to: "https://linkedin.com", icon: Linkedin },
];
