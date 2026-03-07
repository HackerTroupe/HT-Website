export interface Operation {
  id: string;
  category: 'CTF' | 'Hackathon' | 'Research';
  name: string;
  date: string;           // YYYY-MM or YYYY-MM-DD — used for sorting and display
  outcome: string;        // Key result, achievement, or deliverable
  organizer?: string;     // Who ran the event
  description?: string;   // Additional context or notes
  participants?: string[]; // Team members who participated
  year?: string;          // Derived from date automatically if not set
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

const defaultOperations: Operation[] = [
  {
    id: 'cryptonite-2026',
    category: 'CTF',
    name: 'CRYPTONITE CTF 2026',
    date: '2026-03',
    organizer: 'IIT Tirupati',
    outcome: 'Top 28th globally solving 21/23 challenges',
    description: 'Competed against 370+ teams worldwide in a 48-hour cybersecurity competition, showcasing our skills across multiple domains.',
  },
];

const OPERATIONS_STORAGE_KEY = 'hackertroupe_operations_v2';

const prepare = (ops: Operation[]): Operation[] =>
  [...ops]
    .map(op => ({ ...op, year: op.year ?? op.date.slice(0, 4) }))
    .sort((a, b) => b.date.localeCompare(a.date));

export const getOperations = (): Operation[] => {
  if (typeof window === 'undefined') return prepare(defaultOperations);

  const stored = localStorage.getItem(OPERATIONS_STORAGE_KEY);
  if (stored) {
    try {
      return prepare(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse operations from localStorage', e);
    }
  }

  localStorage.setItem(OPERATIONS_STORAGE_KEY, JSON.stringify(defaultOperations));
  return prepare(defaultOperations);
};

export const saveOperations = (operations: Operation[]): void => {
  localStorage.setItem(OPERATIONS_STORAGE_KEY, JSON.stringify(operations));
};

export const addOperation = (operation: Omit<Operation, 'id'>): Operation => {
  const newOp: Operation = { ...operation, id: generateId() };
  const current = getOperations();
  saveOperations([...current, newOp]);
  return newOp;
};

export const updateOperation = (id: string, updates: Partial<Omit<Operation, 'id'>>): void => {
  const current = getOperations();
  const index = current.findIndex(o => o.id === id);
  if (index !== -1) {
    current[index] = { ...current[index], ...updates };
    saveOperations(current);
  }
};

export const deleteOperation = (id: string): void => {
  const currentOperations = getOperations();
  const filtered = currentOperations.filter(o => o.id !== id);
  saveOperations(filtered);
};
