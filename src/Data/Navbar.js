import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { locations } from "./locations";


export const navbarLinks = [
  { title: "home", href: "/" },
  {
    title: "about us",
    href: "/about-us",
    dropDown: [
      { title: "who we are", href: "/about-us#who-we-are" },
      { title: "our mission & vision", href: "/about-us#mission-vision" },
      { title: "key management", href: "/about-us#key-management" },
      { title: "our team", href: "/about-us#team" },
    ],
  },
  {
    title: "services",
    href: "/services",
    dropDown: [
      { title: "laboratory services", href: "/services/laboratory" },
      { title: "imaging services", href: "/services/imaging" },
      { title: "cardia services", href: "/services/cardiac" },
      { title: "respiratory services", href: "/services/respiratory" },
      { title: "bone health services", href: "/services/bone-health" },
      { title: "women health services", href: "/services/women-health" },
      { title: "dental services", href: "/services/dental" },
      { title: "neuro services", href: "/services/neuro" },
      {
        title: "covid-19 diagnostics",
        href: "/services/covid",
        dropDown: [
          { title: "covid-19 testing", href: "/services/covid/testing" },
          {
            title: "covid-19 spike2 antibody test",
            href: "/services/covid/spike2-antibody",
          },
        ],
      },
      { title: "all services", href: "/services/all" },
    ],
  },
  {
    title: "locations",
    href: "/locations",
    dropDown: [
      {
        title: "Islamabad",
        href: "/location/islamabad",
        dropDown: locations.Islamabad.branches.map((b) => ({
          title: b.name,
          href: b.href,
        })),
      },
      {
        title: "Lahore",
        href: "/location/lahore",
        dropDown: locations.Lahore.branches.map((b) => ({
          title: b.name,
          href: b.href,
        })),
      },
      { title: "Rawalpindi", href: "/location/rawalpindi" },
      { title: "Chakwal", href: "/location/chakwal" },
      { title: "Charsadda", href: "/location/charsadda" },
      { title: "Bannu", href: "/location/bannu" },
    ],
  },
  { title: "jobs", href: "/jobs" },
  { title: "contact us", href: "/contact-us" },
];



export const socialLinks = [
    { title: "Twitter", to: "https://twitter.com/", icon: Twitter },
    { title: "Facebook", to: "https://facebook.com", icon: Facebook },
    { title: "Instagram", to: "https://instagram.com", icon: Instagram },
    { title: "LinkedIn", to: "https://linkedin.com", icon: Linkedin },
];
