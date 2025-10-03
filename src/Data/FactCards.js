import { 
  Calendar, 
  GitBranch, 
  Users, 
  Stethoscope, 
  Microscope, 
  Briefcase, 
  Award, 
  MapPin,
  Home
} from 'lucide-react';

export const impactCards = [
  {
    id: 1,
    frontNumber: "365",
    frontTitle: "Days of Service",
    frontIcon: Calendar,
    backTitle: "Years of Excellence",
    backDescription: "Over two decades of trusted healthcare services, providing consistent and reliable medical care to millions of patients across Pakistan.",
    backIcon: Award
  },
  {
    id: 2,
    frontNumber: "+21",
    frontTitle: "Years",
    frontIcon: Calendar,
    backTitle: "Experience & Trust",
    backDescription: "21 years of medical excellence and innovation in diagnostic services, building trust with generations of families.",
    backIcon: Award
  },
  {
    id: 3,
    frontNumber: "+150",
    frontTitle: "Branches",
    frontIcon: GitBranch,
    backTitle: "Nationwide Network",
    backDescription: "Extensive network of branches ensuring accessible healthcare services in every major city and region of Pakistan.",
    backIcon: MapPin
  },
  {
    id: 4,
    frontNumber: "+3 MN",
    frontTitle: "Patients per annum",
    frontIcon: Users,
    backTitle: "Patient Care",
    backDescription: "Serving over 3 million patients annually with comprehensive healthcare solutions and personalized medical attention.",
    backIcon: Stethoscope
  },
  {
    id: 5,
    frontNumber: "+6 MN",
    frontTitle: "Tests per annum",
    frontIcon: Microscope,
    backTitle: "Diagnostic Excellence",
    backDescription: "Conducting over 6 million diagnostic tests yearly with state-of-the-art equipment and accurate results.",
    backIcon: Microscope
  },
  // {
  //   id: 6,
  //   frontNumber: "+4k",
  //   frontTitle: "Employees",
  //   frontIcon: Briefcase,
  //   backTitle: "Dedicated Team",
  //   backDescription: "A team of 4000+ skilled professionals committed to delivering exceptional healthcare services and patient care.",
  //   backIcon: Users
  // },
  {
    id: 7,
    frontNumber: "+300",
    frontTitle: "Qualified Doctors",
    frontIcon: Stethoscope,
    backTitle: "Medical Expertise",
    backDescription: "Panel of 300+ highly qualified and experienced doctors providing expert medical consultations and care.",
    backIcon: Stethoscope
  },
  {
    id: 8,
    frontNumber: "+50",
    frontTitle: "Cities of Pakistan",
    frontIcon: MapPin,
    backTitle: "National Presence",
    backDescription: "Serving patients across 50+ cities nationwide, making quality healthcare accessible to all Pakistanis.",
    backIcon: MapPin
  },
  {
    id: 9,
    frontNumber: "Largest",
    frontTitle: "Home Sample Collection",
    frontIcon: Home,
    backTitle: "Convenient Healthcare",
    backDescription: "Pakistan's largest home sample collection service, bringing diagnostic convenience right to your doorstep.",
    backIcon: Home
  }
];