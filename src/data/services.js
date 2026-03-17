import { FiCode, FiLayout, FiSmartphone, FiTrendingUp } from 'react-icons/fi';

export const services = [
  {
    id: 'web-dev',
    icon: FiCode,
    title: 'Web Development',
    description: 'Fast, accessible React applications built to scale. From landing pages to complex dashboards.',
    gradient: 'from-brand-purple to-brand-pink',
  },
  {
    id: 'ui-design',
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Interfaces that feel intuitive and look stunning. We design for humans first, pixels second.',
    gradient: 'from-brand-pink to-brand-cyan',
  },
  {
    id: 'mobile',
    icon: FiSmartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform React Native apps for iOS and Android. One codebase, native performance.',
    gradient: 'from-brand-cyan to-brand-lime',
  },
  {
    id: 'strategy',
    icon: FiTrendingUp,
    title: 'Digital Strategy',
    description: 'SEO, analytics, and conversion-focused growth tactics that turn visitors into customers.',
    gradient: 'from-brand-lime to-brand-purple',
  },
];
