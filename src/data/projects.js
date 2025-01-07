import dash from "../assets/projects/dash.png";
import kemet from "../assets/projects/kemet.png";
import todo from "../assets/projects/todo.png";
import ecommerce from "../assets/projects/e-commerce.png";
import academy from "../assets/projects/Academy.png";
import gym from "../assets/projects/gym.png";


const data = [
  {
    id: '1',
    title: 'Dashboard',
    description:
      'A modern, responsive dashboard built with Next.js, Tailwind CSS, and Recharts for real-time data visualization and analytics.',
    image: {
      src: dash,
      placeholderSrc:
        '../assets/projects/dash.png'
    },
    links: {
      site: 'https://dashboard-neon-two-81.vercel.app',
    },
    technologies: [
      'typescript',
      'next.js',
      'tailwindcss',
      'recharts',
      'react hook form',
      'zod',
    ],
  },
  {
    id: '2',
    title: 'Kemet Translator',
    description:
      'A creative web tool that translates modern text into stylized ancient Egyptian hieroglyphs, bringing the language of Kemet to life.',
    image: {
      src: kemet,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://kemet-translator.netlify.app/',
    },
    technologies: [
      'typescript',
      'react',
      'tailwindcss',
      'shadcn/ui',
      'Tanstack Query',
      'recharts',

    ],
  },
  {
    id: '3',
    title: 'To-Do list',
    description:
      'A minimalist and user-friendly to-do list app for effortlessly managing and organizing daily tasks.',
    image: {
      src: todo,
      placeholderSrc: todo,
    },
    links: {
      site: 'https://todols-om22.netlify.app/',
    },
    technologies: [
      'javascript',
      'react',
      'taiwlindcss',
      'radix/ui',
      'redux toolkit',
    ],
  },
  {
    id: '6',
    title: 'GO Academy',
    description:
      'An interactive learning platform for mastering the Go programming language through structured lessons and hands-on exercises.',
    image: {
      src: academy,
      placeholderSrc: academy,
    },
    links: {
      repo: 'https://go-academy.netlify.app/',
    },
    technologies: [
      'javascript',
      'react',
      'bootstrap',
      'swiper',
    ],
  },
  {
    id: '4',
    title: 'E-Commerce',
    description:
      'A modern, responsive e-commerce platform offering a seamless and intuitive online shopping experience.',
    image: {
      src: ecommerce,
      placeholderSrc: ecommerce
    },
    links: {
      site: 'https://storeoff.netlify.app/',
    },
    technologies: [
      'javascript',
      'react',
      'taiwlindcss',
      'radix/ui',
      'redux toolkit',
    ],
  },
  {
    id: '5',
    title: 'Gym',
    description:
      'A modern, responsive fitness website offering gym services, workout plans, and wellness inspiration.',
    image: {
      src: gym,
      placeholderSrc: gym,
    },
    links: {
      repo: 'https://gymweb22.netlify.app/',
    },
    technologies: [
      'javascript',
      'react',
      'material-ui',
      'react router',
    ],
  },

];

export default data;
