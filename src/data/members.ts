export interface Member {
  id: string;
  alias: string;
  realName?: string;
  domains: string[];
  skills: string;
  year: string | string[]; // Year joined: '2025' or ['2025', '2026'] when active multiple years
  isLeader?: boolean; // Leader of the year
  github?: string;
  linkedin?: string;
  website?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
  image: string;
}

export const members: Member[] = [
  {
    id: 'N210665',
    alias: 'LUZ1LF3R',
    realName: 'Uday Cherri',
    domains: ['Reverse Engineering', 'Pwn'],
    skills: 'Binary Analysis & Malware Research',
    year: ['2026'],
    isLeader: true,
    email: 'luz1lf3r@hackertroupe.dev',
    github: 'LUZ1LF3R',
    website: 'https://cyb3r-bo1.github.io',
    twitter: 'LUZ1LF3R',
    linkedin: 'uday-kiran-cherri',
    image: 'https://i.pinimg.com/1200x/9b/c1/d6/9bc1d6d635544e335af83a6ed237ca93.jpg',
  },
  {
    id: 'N210001',
    alias: 'BL0SS0M',
    realName: 'Sowmya Sri',
    domains: ['Web Security'],
    skills: 'Application security & bug hunting',
    year: ['2026'],
    email: 'bl0ss0m@hackertroupe.dev',
    image: 'https://i.pinimg.com/1200x/ef/e8/be/efe8bea772dad984bcbbdbe2438ba7a4.jpg',
  },
    {
    id: 'N210369',
    alias: 's0c41dgvns',
    realName: 'Yaswanth Garlapati',
    domains: ['Forensics', 'Web Security'],
    skills: 'Memory forensics, application security & bug hunting',
    year: ['2026'],
    github: 'saiyash006',
    linkedin: 'yaswanth-garlapati-74y38',
    email: 's0c41dgvns@gmail.com',
    website: 'https://s0c41dgvns.vercel.app/',
    image: 'https://i.pinimg.com/1200x/d6/52/64/d65264a730bb16d5f2e037fba0ded2b0.jpg',
  },
    {
    id: 'N210036',
    alias: 'y0ru1ch1',
    realName: 'Pavitra Laxmi',
    domains: ['Web Security'],
    skills: 'SQLi, application security & bug hunting',
    year: ['2026'],
    github: 'pavitralaxmi',
    linkedin: 'pavitralaxmi-pulakhandam',
    email: 'y0ru1ch1dev@gmail.com',
    twitter: 'y0_ru1ch1',
    website: 'https://pavitralaxmi05.github.io/y0ru1ch1/',
    image: 'https://i.pinimg.com/736x/24/93/1b/24931bcf1a594c804e728aecba712b96.jpg',
  },
    {
    id: 'N220941',
    alias: 'R4YAR4V3N0x',
    realName: 'Pravallika G',
    domains: ['Web Security'],
    skills: 'XSS, application security & bug hunting',
    year: ['2026'],
    linkedin: 'pravallika-gollapalli-32769b325',
    email: 'r4yar4v3n0x@gmail.com',
    twitter: 'R4YAR4V3N0x',
    image: 'https://i.pinimg.com/1200x/0f/db/cc/0fdbcc8c8dd7f80dba5e3115915040f0.jpg',
  },
    {
    id: 'N220476',
    alias: 'n3zuk0x',
    realName: 'JAHNAVI M',
    domains: ['Web Security'],
    skills: 'API security, application security & bug hunting',
    year: ['2026'],
    linkedin: 'jahnavi-m-643921325',
    email: 'n3zuk0x0@gmail.com',
    twitter: 'n3zuk0x83960',
    image: 'https://i.pinimg.com/1200x/9b/cd/f0/9bcdf09a320da86f6ff8266b796e4f43.jpg',
  },
];

// Local storage key for members
const MEMBERS_STORAGE_KEY = 'hackertroupe_members';

export const getMembers = (): Member[] => {
  if (typeof window === 'undefined') return members;
  
  const stored = localStorage.getItem(MEMBERS_STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // If the stored members differ from the default `members` array (e.g. you edited src/data/members.ts),
      // prefer the source-of-truth (the file) and overwrite localStorage so edits take effect immediately.
      if (JSON.stringify(parsed) !== JSON.stringify(members)) {
        localStorage.setItem(MEMBERS_STORAGE_KEY, JSON.stringify(members));
        return members;
      }
      return parsed;
    } catch (e) {
      console.error('Failed to parse members from localStorage', e);
    }
  }
  
  // Initialize with default members
  localStorage.setItem(MEMBERS_STORAGE_KEY, JSON.stringify(members));
  return members;
};

export const saveMembers = (newMembers: Member[]): void => {
  localStorage.setItem(MEMBERS_STORAGE_KEY, JSON.stringify(newMembers));
};

export const addMember = (member: Member): void => {
  const currentMembers = getMembers();
  currentMembers.push(member);
  saveMembers(currentMembers);
};

export const updateMember = (id: string, updatedMember: Member): void => {
  const currentMembers = getMembers();
  const index = currentMembers.findIndex(m => m.id === id);
  if (index !== -1) {
    currentMembers[index] = updatedMember;
    saveMembers(currentMembers);
  }
};

export const deleteMember = (id: string): void => {
  const currentMembers = getMembers();
  const filtered = currentMembers.filter(m => m.id !== id);
  saveMembers(filtered);
};
