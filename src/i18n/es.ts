import { ANDREA_LINKEDIN, VILLIE_LINKEDIN } from './site';

export const es = {
  lang: 'es',
  title: 'INntratec — Transformación digital, I+D+i y transferencia tecnológica',
  description:
    'Asesoría en transformación digital, I+D+i y transferencia tecnológica en Cuenca, Ecuador, para el sector productivo, universidades, empresas e institutos de investigación.',
  slogan: 'Innovación en tus manos',
  skip: 'Saltar al contenido',
  nav: { about: 'Acerca de', what: 'Servicios', team: 'Equipo', partners: 'Alianzas', contact: 'Contacto' },
  hero: {
    eyebrow: 'Alta tecnología · I+D+i · Cuenca, Ecuador',
    title: 'Convertimos la investigación en tecnología que funciona.',
    lead: 'Asesoramos en transformación digital y ejecutamos proyectos de investigación, desarrollo, innovación y transferencia tecnológica con el sector productivo, universidades e institutos de investigación.',
    cta: 'Escríbenos',
    secondary: 'Ver LinkedIn',
  },
  about: {
    title: 'Acerca de INntratec',
    paras: [
      'INntratec es una empresa de alta tecnología con sede en Cuenca, Ecuador, fundada en 2021. Acompañamos a empresas, instituciones de educación superior y centros de investigación en su transformación digital, mediante el diseño, desarrollo e implementación de proyectos y programas de I+D+i y transferencia tecnológica.',
      'Trabajamos la investigación aplicada junto a instituciones de educación superior y centros de investigación nacionales e internacionales, para que sus resultados lleguen a la sociedad y al sector productivo.',
    ],
    facts: [
      { k: 'Fundación', v: '2021' },
      { k: 'Sede', v: 'Cuenca, Azuay, Ecuador' },
      { k: 'Sector', v: 'Servicios y consultoría de TI' },
      { k: 'Especialidades', v: 'Investigación, innovación, transferencia tecnológica, ciencia de datos, desarrollo tecnológico y telemedicina' },
    ],
  },
  what: {
    title: 'Servicios',
    items: [
      { t: 'Transformación digital e I+D+i', d: 'Asesoría y diseño, desarrollo e implementación de proyectos y programas de I+D+i y transferencia tecnológica para el sector productivo.' },
      { t: 'Investigación aplicada', d: 'Acompañamiento a instituciones de educación superior y centros de investigación, nacionales e internacionales, para investigar y transferir resultados a la sociedad.' },
      { t: 'Servicio tecnológico integral', d: 'Apoyo multidisciplinar a empresas, centros de investigación y entidades que requieran innovación empresarial.' },
      { t: 'Capacitación', d: 'Diseño y propuesta de programas de formación para la sociedad en investigación, innovación y transferencia tecnológica.' },
    ],
  },
  areas: {
    title: 'Áreas de especialidad',
    items: ['Investigación', 'Innovación', 'Transferencia tecnológica', 'Ciencia de datos', 'Desarrollo tecnológico', 'Telemedicina'],
  },
  who: {
    title: 'Para quién trabajamos',
    items: [
      { t: 'Sector productivo y empresas', d: 'Innovación y transformación digital con respaldo técnico y académico.' },
      { t: 'Instituciones de educación superior', d: 'Gestión y ejecución de proyectos de investigación y vinculación.' },
      { t: 'Institutos y centros de investigación', d: 'Apoyo para ejecutar y transferir proyectos de investigación aplicada.' },
    ],
  },
  team: {
    title: 'Equipo',
    lead: 'Gestión de proyectos de investigación y experiencia científica en datos, territorio y salud digital.',
    linkedin: 'Ver perfil en LinkedIn',
    members: [
      {
        name: 'Andrea Morales Rodríguez',
        initials: 'AM',
        role: 'Gestión de proyectos y planificación estratégica',
        bio: 'Ingeniera en Sistemas y Magíster en Gestión Estratégica de las Tecnologías de la Información. Cursa la maestría en Sistemas de Información con mención en Data Science en la Pontificia Universidad Católica del Ecuador.',
        points: [
          'Más de 12 años de experiencia en gestión de proyectos.',
          'Ha gestionado más de 60 proyectos de investigación y desarrollo de instituciones de educación superior públicas y privadas del Ecuador.',
          'Experiencia en planificación estratégica, gestión de presupuestos y Plan Operativo Anual.',
        ],
        linkedin: ANDREA_LINKEDIN,
      },
      {
        name: 'Villie Morocho Zurita',
        initials: 'VM',
        role: 'Investigación, datos espaciales y telemedicina',
        bio: 'Doctor por la Universidad Politécnica de Cataluña, especialista en Infraestructuras de Datos Espaciales (IDE), con Diploma de Estudios Avanzados en Lenguajes y Sistemas de Computación de la misma universidad.',
        points: [
          'Investigador Titular en la Universidad de Cuenca.',
          'Cofundador del Laboratorio Virtual de Ciudad y Territorio y coordinador del Laboratorio de Telemedicina y Salud Digital.',
          'Fundador y director del Centro de Desarrollo e Innovación (2007–2012).',
          'Director Ejecutivo de la red académica nacional CEDIA (2009–2013).',
        ],
        linkedin: VILLIE_LINKEDIN,
      },
    ],
  },
  partners: {
    title: 'Trabajamos con',
    lead: 'Colaboraciones con actores académicos y de investigación en salud e inteligencia artificial.',
    items: ['Departamento de Ciencias de la Computación, Universidad de Cuenca', 'CLIAS — centro de IA en salud', 'Proyecto Nexus4Her'],
  },
  process: {
    title: 'Cómo trabajamos',
    steps: [
      { t: 'Diagnóstico', d: 'Entendemos el reto y el contexto.' },
      { t: 'Diseño', d: 'Definimos alcance, equipo y métricas.' },
      { t: 'Ejecución', d: 'Desarrollo e investigación aplicada.' },
      { t: 'Transferencia', d: 'Entregamos resultados listos para usarse.' },
    ],
  },
  contact: {
    title: '¿Tienes un proyecto en mente?',
    lead: 'Conversemos sobre cómo llevarlo a la práctica.',
    email: 'Enviar correo',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    where: 'Cuenca, Azuay, Ecuador',
  },
  footer: '© {year} INntratec SAS. Todos los derechos reservados.',
  switchLabel: 'English',
  switchHref: '/en/',
};
export type Dict = typeof es;
