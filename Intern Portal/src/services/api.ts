import axios from 'axios';
import { Intern, LeaderboardEntry, Reward } from '../types';

// Mock API base URL (in a real app, this would be your actual API)
const API_BASE_URL = 'https://api.example.com';

// Mock data
const mockIntern: Intern = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@company.com',
  referralCode: 'deep2025',
  totalDonations: 15750,
  joinDate: '2024-01-15'
};

const mockLeaderboard: LeaderboardEntry[] = [
  { id: '1', name: 'Sarah Chen', donations: 25400, rank: 1 },
  { id: '2', name: 'Michael Rodriguez', donations: 22100, rank: 2 },
  { id: '3', name: 'Emily Davis', donations: 19800, rank: 3 }
];

const mockRewards: Reward[] = [
  {
    id: '1',
    name: 'First Donation',
    description: 'Raised your first $100',
    requiredAmount: 100,
    isUnlocked: true,
    icon: '🎯'
  },
  {
    id: '2',
    name: 'Fundraising Star',
    description: 'Raised over $5,000',
    requiredAmount: 5000,
    isUnlocked: true,
    icon: '⭐'
  },
  {
    id: '3',
    name: 'Top Performer',
    description: 'Raised over $10,000',
    requiredAmount: 10000,
    isUnlocked: true,
    icon: '🏆'
  },
  {
    id: '4',
    name: 'Elite Fundraiser',
    description: 'Raised over $25,000',
    requiredAmount: 25000,
    isUnlocked: false,
    icon: '💎'
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Mock login function
  login: async (email: string, password: string): Promise<{ success: boolean; token?: string }> => {
    await delay(1000);
    // Accept any email/password for demo purposes
    return { success: true, token: 'mock-jwt-token' };
  },

  // Mock signup function
  signup: async (name: string, email: string, password: string): Promise<{ success: boolean; token?: string }> => {
    await delay(1200);
    // Accept any signup data for demo purposes
    return { success: true, token: 'mock-jwt-token' };
  },

  // Get intern profile
  getInternProfile: async (): Promise<Intern> => {
    await delay(800);
    return mockIntern;
  },

  // Get leaderboard
  getLeaderboard: async (): Promise<LeaderboardEntry[]> => {
    await delay(600);
    return mockLeaderboard;
  },

  // Get rewards
  getRewards: async (): Promise<Reward[]> => {
    await delay(500);
    return mockRewards;
  }
};