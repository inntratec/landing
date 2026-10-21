import type { Dict } from './es';
import { ANDREA_LINKEDIN, VILLIE_LINKEDIN } from './site';

export const en: Dict = {
  lang: 'en',
  title: 'INntratec — Digital transformation, R&D&I and technology transfer',
  description:
    'Digital transformation, R&D&I and technology transfer consulting in Cuenca, Ecuador, for the productive sector, universities, companies and research institutes.',
  slogan: 'Innovation in your hands',
  skip: 'Skip to content',
  nav: { about: 'About', what: 'Services', team: 'Team', partners: 'Partners', contact: 'Contact' },
  hero: {
    eyebrow: 'High technology · R&D&I · Cuenca, Ecuador',
    title: 'We turn research into technology that works.',
    lead: 'We advise on digital transformation and deliver research, development, innovation and technology transfer projects with the productive sector, universities and research institutes.',
    cta: 'Get in touch',
    secondary: 'View LinkedIn',
  },
  about: {
    title: 'About INntratec',
    paras: [
      'INntratec is a high-technology company based in Cuenca, Ecuador, founded in 2021. We support companies, higher-education institutions and research centers in their digital transformation by designing, developing and implementing R&D&I and technology transfer projects and programs.',
      'We carry out applied research alongside national and international higher-education institutions and research centers, so that results reach society and the productive sector.',
    ],
    facts: [
      { k: 'Founded', v: '2021' },
      { k: 'Headquarters', v: 'Cuenca, Azuay, Ecuador' },
      { k: 'Industry', v: 'IT services and consulting' },
      { k: 'Specialties', v: 'Research, innovation, technology transfer, data science, technological development and telemedicine' },
    ],
  },
  what: {
    title: 'Services',
    items: [
      { t: 'Digital transformation and R&D&I', d: 'Consulting and design, development and implementation of R&D&I and technology transfer projects and programs for the productive sector.' },
      { t: 'Applied research', d: 'Support for higher-education institutions and national and international research centers to carry out research and transfer results to society.' },
      { t: 'Integrated technology service', d: 'Multidisciplinary support for companies, research centers and organizations that need business innovation.' },
      { t: 'Training', d: 'Design and proposal of training programs for society on research, innovation and technology transfer.' },
    ],
  },
  areas: {
    title: 'Areas of expertise',
    items: ['Research', 'Innovation', 'Technology transfer', 'Data science', 'Technological development', 'Telemedicine'],
  },
  who: {
    title: 'Who we work for',
    items: [
      { t: 'Productive sector and companies', d: 'Innovation and digital transformation backed by technical and academic expertise.' },
      { t: 'Higher-education institutions', d: 'Management and delivery of research and outreach projects.' },
      { t: 'Research institutes and centers', d: 'Support to run and transfer applied research projects.' },
    ],
  },
  team: {
    title: 'Team',
    lead: 'Research project management and scientific experience in data, territory and digital health.',
    linkedin: 'View LinkedIn profile',
    members: [
      {
        name: 'Andrea Morales Rodríguez',
        initials: 'AM',
        role: 'Project management and strategic planning',
        bio: 'Systems Engineer with a Master’s in Strategic Management of Information Technology. Currently pursuing a Master’s in Information Systems with a Data Science focus at Pontificia Universidad Católica del Ecuador.',
        points: [
          'Over 12 years of experience in project management.',
          'Has managed more than 60 research and development projects for public and private higher-education institutions in Ecuador.',
          'Experience in strategic planning, budget management and Annual Operating Plans.',
        ],
        linkedin: ANDREA_LINKEDIN,
      },
      {
        name: 'Villie Morocho Zurita',
        initials: 'VM',
        role: 'Research, spatial data and telemedicine',
        bio: 'PhD from Universitat Politècnica de Catalunya, specialist in Spatial Data Infrastructures (SDI), with an Advanced Studies Diploma in Languages and Computer Systems from the same university.',
        points: [
          'Senior Researcher at Universidad de Cuenca.',
          'Co-founder of the Virtual City and Territory Laboratory and coordinator of the Telemedicine and Digital Health Laboratory.',
          'Founder and director of the Development and Innovation Center (2007–2012).',
          'Executive Director of the national academic network CEDIA (2009–2013).',
        ],
        linkedin: VILLIE_LINKEDIN,
      },
    ],
  },
  partners: {
    title: 'We work with',
    lead: 'Collaborations with academic and research players in health and artificial intelligence.',
    items: ['Computer Science Department, Universidad de Cuenca', 'CLIAS — health AI center', 'Nexus4Her project'],
  },
  process: {
    title: 'How we work',
    steps: [
      { t: 'Discovery', d: 'We understand the challenge and context.' },
      { t: 'Design', d: 'We define scope, team and metrics.' },
      { t: 'Delivery', d: 'Development and applied research.' },
      { t: 'Transfer', d: 'We hand over results ready to use.' },
    ],
  },
  contact: {
    title: 'Have a project in mind?',
    lead: "Let's talk about how to make it real.",
    email: 'Send email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    where: 'Cuenca, Azuay, Ecuador',
  },
  footer: '© {year} INntratec SAS. All rights reserved.',
  switchLabel: 'Español',
  switchHref: '/',
};
