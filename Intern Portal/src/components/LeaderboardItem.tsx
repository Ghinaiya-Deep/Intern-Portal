import React from 'react';
import { LeaderboardEntry } from '../types';
import { Crown, Medal, Award } from 'lucide-react';

interface LeaderboardItemProps {
  entry: LeaderboardEntry;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ entry }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-orange-600" />;
      default:
        return <div className="h-6 w-6 flex items-center justify-center text-gray-600 font-bold">#{rank}</div>;
    }
  };

  const getRankColors = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
      case 2:
        return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
      case 3:
        return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className={`rounded-lg border p-6 transition-all duration-200 hover:shadow-md ${getRankColors(entry.rank)}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {getRankIcon(entry.rank)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{entry.name}</h3>
            <p className="text-sm text-gray-600">Rank #{entry.rank}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">
            ${entry.donations.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">Total Raised</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardItem;