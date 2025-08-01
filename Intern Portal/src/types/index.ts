export interface Intern {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  totalDonations: number;
  joinDate: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  donations: number;
  rank: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  requiredAmount: number;
  isUnlocked: boolean;
  icon: string;
}