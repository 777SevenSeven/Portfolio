//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
} from 'react-icons/fi';

import {
  FaLinkedin,
} from 'react-icons/fa';

import {
  GiGamepad
} from 'react-icons/gi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.png';
import Project5 from './assets/img/projects/p5.png';
import Project6 from './assets/img/projects/p6.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.jpeg';
import TestiImage2 from './assets/img/testimonials/testimonial-2.jpeg';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/andre-queirozz/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/andrequeir0z/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/777SevenSeven',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/AndreAntonioz',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Prototype of the Copel app',
    category: 'UI/UX Design',
  },
  {
    id: '2',
    image: Project2,
    name: 'PetShop Responsive Website',
    category: 'Web Development',
  },
  {
    id: '3',
    image: Project3,
    name: 'Design for the UTFPR project',
    category: 'UI/UX Design',
  },
  {
    id: '4',
    image: Project4,
    name: 'Dragon Killer',
    category: 'Game Development',
  },
  {
    id: '5',
    image: Project5,
    name: 'Brazil&Properties',
    category: 'Web Development',
  },
  {
    id: '6',
    image: Project6,
    name: 'Platform about hackathons',
    category: 'Web Development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web Development',
  },
  {
    name: 'Game Development',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Crafting modern and user-friendly designs that captivate audiences.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Delivering clean, functional, and scalable code for all your web projects.',
  },
  {
    icon: <GiGamepad />,
    name: 'Game Development',
    description:
      'Designing immersive and responsive gaming experiences.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Improving your online visibility with cutting-edge search engine strategies.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'He works very well in a team, motivates even in the most difficult moments, demonstrates initiative, has autonomy and is willing to learn.',
    authorName: 'Gabriel de Paula Vieira Cau',
    authorPosition: 'Founder and Data Project Director, Analisia',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'André is an extremely hardworking and proactive person, with impressive creativity and an ability to bring innovative ideas. In addition, he has a commitment to continuous improvement and this directly reflects on the excellence of the work he delivers. Without a doubt, what he does stands out for its originality!',
    authorName: 'Ana Paola Ramos',
    authorPosition: 'Founder, Visionary',
  }
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Let’s Work Together!',
    subtitle: 'Have a question or an idea? I’d love to hear from you.',
    description: 'Email me at andreantoniodasilvaqueiroz@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Paraná, Brazil',
    description: 'Serving clients worldwide',
  },
];
