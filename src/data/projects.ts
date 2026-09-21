import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'healthgate',
    title: 'HealthGate',
    subtitle: 'Hospital Management System',
    image: '/images/healthgate.jpg',
    description:
      'A full-stack hospital management system connecting patients, doctors, and administrators through appointment management, online payments, notifications, and real-time video consultations.',
    stack: 'MERN + TypeScript + Docker',
    isFeatured: true,
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'WebRTC',
      'Razorpay',
      'Cloudinary',
      'Nodemailer',
      'Docker',
      'Nginx',
    ],
    features: [
      {
        title: 'Role-Based Authentication',
        description:
          'Patients, Doctors, and Admins with JWT authentication and authorization.',
      },
      {
        title: 'Appointment Management',
        description:
          'Doctor availability, working hours, appointment slots, and booking restrictions.',
      },
      {
        title: 'Online Payments',
        description: 'Razorpay integration for appointment payments.',
      },
      {
        title: 'Video Consultation',
        description:
          'Real-time video consultations using WebRTC and Socket.IO with STUN/TURN infrastructure.',
      },
      {
        title: 'Real-Time Communication',
        description: 'Socket.IO for real-time events and communication.',
      },
      {
        title: 'Media Management',
        description: 'Cloudinary integration for patient profile images.',
      },
      {
        title: 'Email Notifications',
        description: 'Nodemailer-based email notification system.',
      },
      {
        title: 'Containerized Deployment',
        description: 'Docker, Docker Compose, and Nginx for containerized deployment.',
      },
    ],
    architecture: [
      {
        label: 'REST & Clean Architecture',
        nodes: [
          'React / Vite',
          'REST API',
          'Controllers',
          'Services / Use Cases',
          'Repository Interfaces',
          'MongoDB',
        ],
      },
      {
        label: 'Real-Time / WebRTC Flow',
        nodes: ['React', 'Socket.IO', 'WebRTC', 'STUN / TURN', 'Video Consultation'],
      },
    ],
    overview:
      'HealthGate is a comprehensive hospital management platform designed to digitize and streamline patient-doctor interactions. The system supports three distinct user roles — Patient, Doctor, and Admin — each with tailored dashboards, workflows, and access controls.',
    problem:
      'Healthcare systems often rely on fragmented tools: separate scheduling software, manual payment collection, and no mechanism for remote consultations. Coordinating across patients, doctors, and administrators becomes cumbersome and error-prone.',
    solution:
      'HealthGate unifies appointment scheduling, online payments, email notifications, media management, and real-time video consultations into a single cohesive platform. The backend is structured using Clean Architecture and the Repository Pattern to separate business logic, infrastructure, and HTTP concerns.',
    role:
      'Designed and developed the complete system as a solo developer. Built the React + TypeScript frontend, structured the Node.js backend using Clean Architecture and Repository Pattern, integrated Razorpay for payments, implemented real-time video consultation using WebRTC and Socket.IO with STUN/TURN, set up Cloudinary for media, Nodemailer for email notifications, and containerized the entire application using Docker, Docker Compose, and Nginx.',
    challenges: [
      'Implementing WebRTC with STUN/TURN for video consultations across different network environments.',
      'Designing a clean separation between business logic and infrastructure using the Repository Pattern.',
      'Managing complex appointment slot logic — availability windows, booking restrictions, and time-zone handling.',
      'Containerizing a multi-service Node.js + React application with Docker Compose and Nginx as a reverse proxy.',
    ],
    githubUrl: 'https://github.com/AbhiramN-Mern/HelthGate',
    liveUrl: 'https://helthgate.online/',
  },
  {
    id: 'urbennest',
    title: 'UrbenNest',
    subtitle: 'E-Commerce Platform',
    image: '/images/urbennest.jpg',
    description:
      'A full-stack e-commerce platform enabling users to browse and order products online with secure payment integration, role-based dashboards, and responsive design.',
    stack: 'Node.js + Express + MongoDB + EJS',
    isFeatured: false,
    technologies: ['EJS', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
    features: [
      { title: 'Multi-Role Authentication', description: 'Separate user and admin authentication flows.' },
      { title: 'User Dashboard', description: 'Order tracking, profile management, and address book.' },
      { title: 'Admin Dashboard', description: 'Product management, order management, and reporting.' },
      { title: 'Product Management', description: 'CRUD operations for products with category filtering.' },
      { title: 'Shopping Cart', description: 'Persistent cart with quantity management.' },
      { title: 'Wishlist', description: 'Save products for later purchase.' },
      { title: 'Checkout', description: 'Multi-step checkout with address selection and order review.' },
      { title: 'Razorpay Payments', description: 'Secure online payment integration.' },
      { title: 'Invoice Generation', description: 'Automated PDF invoice generation on order completion.' },
      { title: 'Sales Reporting', description: 'Admin dashboard with sales analytics and export.' },
      { title: 'Responsive UI', description: 'Mobile-friendly interface built with EJS templates.' },
    ],
    architecture: [
      {
        label: 'MVC Architecture',
        nodes: ['Browser / EJS Templates', 'Express Router', 'Controllers', 'Models (Mongoose)', 'MongoDB'],
      },
    ],
    overview:
      'UrbenNest is a traditional server-rendered e-commerce application built with Node.js, Express, MongoDB, and EJS templating. It covers the complete e-commerce lifecycle from product browsing to order fulfillment.',
    problem:
      'Building a production-ready e-commerce platform requires handling complex state (cart, wishlist, orders), multiple user roles, secure payment processing, and order management — all while keeping the codebase organized.',
    solution:
      'UrbenNest implements MVC architecture to separate concerns clearly. Express handles routing, Mongoose models manage data, EJS renders server-side views, and Razorpay handles payment processing. Admin and user dashboards are separated by role-based middleware.',
    role:
      'Designed and developed the complete platform as a solo developer. Built the MVC backend with Node.js and Express, implemented server-rendered views with EJS, integrated Razorpay payment processing with webhook verification, built both user and admin dashboards, implemented automated PDF invoice generation, and added sales reporting for the admin panel.',
    challenges: [
      'Implementing Razorpay webhook verification for secure payment confirmation.',
      'Designing the cart and inventory system to prevent overselling.',
      'Building a PDF invoice generation pipeline integrated with order completion.',
      'Managing role-based access control across admin and user routes.',
    ],
    githubUrl: 'https://github.com/AbhiramN-Mern/UrbenNest',
    liveUrl: 'https://ecommerce-urbennest.onrender.com/',
  },
];
