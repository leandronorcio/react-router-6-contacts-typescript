interface Contact {
  id: string;
  createdAt: Date | number;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
}

type ContactUpdates = Omit<Contact, 'id' | 'createdAt'>;
