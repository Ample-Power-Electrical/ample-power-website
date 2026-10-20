import settings from '../content/settings.json';
import home from '../content/home.json';
import services from '../content/services.json';
import about from '../content/about.json';
import buildings from '../content/buildings.json';
import clients from '../content/clients.json';
import testimonials from '../content/testimonials.json';
import gallery from '../content/gallery.json';
import projectsPage from '../content/projects-page.json';

export { settings, home, services, about, buildings, clients, testimonials, gallery, projectsPage };

// Resize images on the fly when hosted on Netlify, so big phone photos still load fast.
const useCdn = import.meta.env.PUBLIC_IMAGE_CDN === 'netlify';
export function img(src, width = 1200) {
  if (!src) return '';
  if (useCdn && src.startsWith('/')) {
    return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=75`;
  }
  return src;
}

export function getProjects() {
  const files = import.meta.glob('../content/projects/*.md', { eager: true });
  return Object.entries(files)
    .map(([path, mod]) => ({
      slug: path.split('/').pop().replace(/\.md$/, ''),
      ...mod.frontmatter,
      Content: mod.Content,
    }))
    .filter((p) => p.title && p.cover)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function telHref(phone = '') {
  return 'tel:' + phone.replace(/[^\d+]/g, '');
}

export const nav = [
  { href: '/about/', label: 'About us' },
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/buildings/', label: 'Buildings' },
  { href: '/contact/', label: 'Contact' },
];
