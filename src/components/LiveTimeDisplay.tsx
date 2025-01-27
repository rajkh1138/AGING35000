import React, { useEffect, useState } from 'react';
import { Clock, Heart, Wind, Moon, Scissors } from 'lucide-react';
import { TimeBreakdown, LifeStatistics, calculateTotalTime, calculateLifeStatistics } from '../utils/timeCalculations';

interface LiveTimeDisplayProps {
  birthDate: Date;
}

export const LiveTimeDisplay: React.FC<LiveTimeDisplayProps> = ({ birthDate }) => {
  const [time, setTime] = useState<TimeBreakdown>(calculateTotalTime(birthDate));
  const [stats, setStats] = useState<LifeStatistics>(calculateLifeStatistics(time.days));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTotalTime(birthDate);
      setTime(newTime);
      setStats(calculateLifeStatistics(newTime.days));
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-rose-600" />
          <h2 className="text-2xl font-bold text-gray-800">Total Time Lived</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-md">
            <p className="text-2xl font-bold text-rose-600 animate-pulse">{time.years.toLocaleString()}</p>
            <p className="text-gray-600">Years</p>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-md">
            <p className="text-2xl font-bold text-rose-600 animate-pulse">{time.months.toLocaleString()}</p>
            <p className="text-gray-600">Months</p>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-md">
            <p className="text-2xl font-bold text-rose-600 animate-pulse">{time.weeks.toLocaleString()}</p>
            <p className="text-gray-600">Weeks</p>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-md">
            <p className="text-2xl font-bold text-rose-600 animate-pulse">{time.days.toLocaleString()}</p>
            <p className="text-gray-600">Days</p>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-md">
            <p className="text-2xl font-bold text-rose-600 animate-pulse">{time.hours.toLocaleString()}</p>
            <p className="text-gray-600">Hours</p>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-md">
            <p className="text-2xl font-bold text-rose-600 animate-pulse">{time.minutes.toLocaleString()}</p>
            <p className="text-gray-600">Minutes</p>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg transform transition-all duration-300 hover:shadow-md col-span-2 md:col-span-2">
            <p className="text-2xl font-bold text-rose-600 animate-pulse">{time.seconds.toLocaleString()}</p>
            <p className="text-gray-600">Seconds</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-rose-600" />
          <h2 className="text-2xl font-bold text-gray-800">Amazing Facts About You</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-rose-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-rose-600" />
              <p className="text-gray-700">
                You've taken approximately{' '}
                <span className="font-bold text-rose-600">{stats.breaths.toLocaleString()}</span> breaths
              </p>
            </div>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-600" />
              <p className="text-gray-700">
                Your heart has beaten{' '}
                <span className="font-bold text-rose-600">{stats.heartbeats.toLocaleString()}</span> times
              </p>
            </div>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-rose-600" />
              <p className="text-gray-700">
                You've spent{' '}
                <span className="font-bold text-rose-600">{stats.sleepingYears.toFixed(1)}</span> years sleeping
              </p>
            </div>
          </div>
          <div className="bg-rose-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-rose-600" />
              <p className="text-gray-700">
                Your hair has grown{' '}
                <span className="font-bold text-rose-600">{stats.hairLength.toFixed(2)}</span> meters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};