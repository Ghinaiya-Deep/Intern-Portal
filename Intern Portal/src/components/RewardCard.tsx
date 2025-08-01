import React from 'react';
import { Reward } from '../types';
import { Lock } from 'lucide-react';

interface RewardCardProps {
  reward: Reward;
}

const RewardCard: React.FC<RewardCardProps> = ({ reward }) => {
  return (
    <div className={`bg-white rounded-lg border p-4 transition-all duration-200 ${
      reward.isUnlocked 
        ? 'border-green-200 bg-green-50 hover:shadow-md' 
        : 'border-gray-200 bg-gray-50 opacity-60'
    }`}>
      <div className="flex items-center space-x-3">
        <div className="text-2xl">
          {reward.isUnlocked ? reward.icon : <Lock className="h-6 w-6 text-gray-400" />}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${reward.isUnlocked ? 'text-green-900' : 'text-gray-600'}`}>
            {reward.name}
          </h3>
          <p className={`text-sm ${reward.isUnlocked ? 'text-green-700' : 'text-gray-500'}`}>
            {reward.description}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Required: ${reward.requiredAmount.toLocaleString()}
          </p>
        </div>
        {reward.isUnlocked && (
          <div className="text-green-600 font-semibold text-sm">
            Unlocked!
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardCard;