export interface Member {
  id: string;
  alias: string;
  realName?: string;
  domain: string;
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
    domain: 'Reverse Engineering & Pwn',
    skills: 'Binary Analysis & Malware Research',
    year: ['2025'],
    isLeader: true,
    email: 'luz1lf3r@hackertroupe.dev',
    github: 'LUZ1LF3R',
    twitter: 'LUZ1LF3R',
    linkedin: 'uday-kiran-cherri',
    image: 'https://i.pinimg.com/1200x/9b/c1/d6/9bc1d6d635544e335af83a6ed237ca93.jpg',
  },
  {
    id: 'N210001',
    alias: 'BL0SS0M',
    realName: 'Sowmya Sri',
    domain: 'Web Security',
    skills: 'Application security & bug hunting',
    year: ['2025'],
    github: 'nullbyte',
    linkedin: 'sarah-kim-re',
    email: 'bl0ss0m@hackertroupe.dev',
    image: 'https://i.pinimg.com/1200x/5f/05/73/5f057315f27f94bec7dd0535c00c7572.jpg',
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
