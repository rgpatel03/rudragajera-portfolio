// ============================================================
//  EDIT THIS FILE to personalize the portfolio.
//  All content, links, contact info, and images live here.
// ============================================================

import type { Project } from './types';

export const PROFILE = {
  name: 'Rudra Gajera',
  shortName: 'RG',
  title: 'Video Editor & Motion Designer',
  titleLines: ['VIDEO EDITOR &', 'MOTION DESIGNER'],
  experience: '1+ Years Experience',
  heroDescription:
    'Crafting powerful visuals, cinematic edits and motion experiences that make content stand out.',
  about:
    "I'm Rudra Gajera, a video editor and motion designer with 1+ years of experience. I specialize in transforming raw footage into engaging visual stories through creative editing, motion graphics, transitions, effects, sound design and pacing.",
  tagline:
    "I'm Rudra Gajera, a passionate video editor and motion designer creating engaging, cinematic, and visually powerful content. I turn raw footage into polished stories through editing, motion graphics, transitions, sound design, and visual effects.",
  // Replace with your own photo (place file in /public or use a URL)
  photo:
    'https://images.pexels.com/photos/20782024/pexels-photo-20782024.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
};

export const STATS = [
  { value: '01+', label: 'Years Experience' },
  { value: '50+', label: 'Projects' },
  { value: '100%', label: 'Creative Focus' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export type Service = {
  num: string;
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Video Editing',
    description:
      'Cinematic editing, social media content, YouTube videos, reels and promotional videos.',
    icon: 'film',
  },
  {
    num: '02',
    title: 'Motion Graphics',
    description:
      'Animated typography, visual effects, motion graphics and creative compositions.',
    icon: 'sparkles',
  },
  {
    num: '03',
    title: 'Short-Form Content',
    description:
      'Instagram Reels, YouTube Shorts and other engaging short-form videos.',
    icon: 'smartphone',
  },
  {
    num: '04',
    title: 'Social Media Editing',
    description: 'High-retention edits designed for modern social platforms.',
    icon: 'share',
  },
  {
    num: '05',
    title: 'Color & Sound',
    description:
      'Color correction, color grading, sound design and audio synchronization.',
    icon: 'palette',
  },
  {
    num: '06',
    title: 'Creative Storytelling',
    description: 'Turning raw footage into a clear and engaging visual story.',
    icon: 'book-open',
  },
];

export type Tool = {
  name: string;
  skill: string;
  icon: string;
};

export const TOOLS: Tool[] = [
  { name: 'Adobe Premiere Pro', skill: 'Advanced Editing', icon: 'premiere' },
  { name: 'Adobe After Effects', skill: 'Motion Graphics & VFX', icon: 'after-effects' },
  { name: 'CapCut', skill: 'Short-form Content', icon: 'capcut' },
];

// Replace these placeholder thumbnails with your own project images/videos.
// For video: set the `video` field to an .mp4 URL and it will play in the modal.
export const PROJECTS: (Project & { software: string; category: string })[] = [
  {
    id: '01',
    num: '01',
    title: 'Cinematic Edit',
    category: 'Video Editing',
    software: 'Premiere Pro',
    description:
      'A cinematic short edit focused on mood, pacing and atmospheric color grading. Built from raw footage into a polished narrative piece with layered sound design.',
    image:
      'https://images.pexels.com/photos/30692024/pexels-photo-30692024.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    video: '',
  },
  {
    id: '02',
    num: '02',
    title: 'Motion Graphics',
    category: 'After Effects',
    software: 'After Effects',
    description:
      'Animated typography and motion design composition combining kinetic text, shape layers and seamless transitions for a modern promotional piece.',
    image:
      'https://images.pexels.com/photos/18182846/pexels-photo-18182846.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    video: '',
  },
  {
    id: '03',
    num: '03',
    title: 'Social Media Reel',
    category: 'Short Form',
    software: 'CapCut',
    description:
      'High-retention Instagram Reel edit engineered for watch time — punchy cuts, beat-synced transitions and bold captions designed for mobile feed viewing.',
    image:
      'https://images.pexels.com/photos/18545013/pexels-photo-18545013.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    video: '',
  },
  {
    id: '04',
    num: '04',
    title: 'Promotional Video',
    category: 'Premiere Pro',
    software: 'Premiere Pro',
    description:
      'A brand promotional video combining product footage, motion text and color grading to deliver a clean, confident commercial-style edit.',
    image:
      'https://images.pexels.com/photos/38942810/pexels-photo-38942810.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    video: '',
  },
  {
    id: '05',
    num: '05',
    title: 'VFX / Motion Design',
    category: 'After Effects',
    software: 'After Effects',
    description:
      'Visual effects driven motion design piece featuring compositing, glow effects and animated graphic elements built for a futuristic brand reveal.',
    image:
      'https://images.pexels.com/photos/14806271/pexels-photo-14806271.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    video: '',
  },
  {
    id: '06',
    num: '06',
    title: 'Creative Reel',
    category: 'Premiere Pro + After Effects',
    software: 'Premiere Pro + After Effects',
    description:
      'A showreel combining cinematic editing and motion graphics — a fast-paced highlight cut demonstrating range across editing, VFX and sound design.',
    image:
      'https://images.pexels.com/photos/11518796/pexels-photo-11518796.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    video: '',
  },
];

export const TIMELINE = [
  {
    year: '2025 — Present',
    title: 'Video Editor & Motion Designer',
    subtitle: '1+ Years of Creative Experience',
    description:
      'Working on video editing, motion graphics, short-form content, creative social media videos and visual storytelling.',
  },
];

export const WHY = [
  {
    title: 'Creative Editing',
    description: 'I focus on pacing, storytelling and visual impact.',
    icon: 'wand',
  },
  {
    title: 'Attention to Detail',
    description: 'Every transition, cut, sound and visual element matters.',
    icon: 'target',
  },
  {
    title: 'Modern Visuals',
    description: "I create edits designed for today's fast-moving digital content.",
    icon: 'zap',
  },
  {
    title: 'Reliable Delivery',
    description:
      'Professional workflow and clear communication from concept to final export.',
    icon: 'check-circle',
  },
];

export const PROCESS = [
  { num: '01', title: 'Discover', description: 'Understand the project and creative direction.' },
  { num: '02', title: 'Plan', description: 'Build the editing and visual approach.' },
  { num: '03', title: 'Edit', description: 'Create the first visual version.' },
  { num: '04', title: 'Refine', description: 'Improve pacing, motion, color and sound.' },
  { num: '05', title: 'Deliver', description: 'Export and deliver the final polished video.' },
];

// ============================================================
//  CONTACT INFO — replace placeholders with your real details.
// ============================================================
export const CONTACT = {
  email: 'YOUR_EMAIL',
  phone: 'YOUR_PHONE_NUMBER',
  instagram: 'YOUR_INSTAGRAM',
  instagramUrl: 'https://instagram.com/',
  whatsapp: 'YOUR_WHATSAPP',
  whatsappUrl: 'https://wa.me/',
  youtubeUrl: 'https://youtube.com/',
  linkedinUrl: 'https://linkedin.com/',
};
