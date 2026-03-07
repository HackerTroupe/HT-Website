export interface Post {
  title: string;
  type: 'Research Log' | 'CTF Writeup' | 'Build Diary' | 'Paper Notes';
  date: string;
  abstract: string;
  contentFile: string; // Filename in public/posts/ — fetched at runtime
  authors?: string[];  // Member IDs or aliases who worked on this post
  year?: string;       // Derived from date automatically if not set
}

export const posts: Post[] = [
  {
    title: 'CRYPTONITE 2026: Writeup',
    type: 'CTF Writeup',
    date: '2024-03-09',
    year: '2026',
    abstract:
      'Detailed writeup of our performance in CRYPTONITE CTF 2026, where we ranked 28th globally. Covers key challenges solved across web, crypto, and reverse engineering categories.',
    contentFile: 'cryptonite-2026-writeup.md',
    authors: ['LUZ1LF3R', 'BL0SS0M'],
  },
];

const POSTS_STORAGE_KEY = 'hackertroupe_posts_v2';

export const getPosts = (): Post[] => {
  if (typeof window === 'undefined') return posts;

  const stored = localStorage.getItem(POSTS_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse posts from localStorage', e);
    }
  }

  localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts));
  return posts;
};

export const savePosts = (newPosts: Post[]): void => {
  localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(newPosts));
};

export const addPost = (post: Post): void => {
  const current = getPosts();
  current.unshift(post); // new posts go to the top as requested
  savePosts(current);
};

export const updatePost = (contentFile: string, updatedPost: Post): void => {
  const current = getPosts();
  const index = current.findIndex(p => p.contentFile === contentFile);
  if (index !== -1) {
    current[index] = updatedPost;
    savePosts(current);
  }
};

export const deletePost = (contentFile: string): void => {
  const current = getPosts();
  savePosts(current.filter(p => p.contentFile !== contentFile));
};
