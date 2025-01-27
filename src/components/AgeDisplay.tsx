import React from 'react';
import { Clock, Calendar, Quote, History } from 'lucide-react';
import { AgeBreakdown } from '../utils/dateCalculations';

interface AgeDisplayProps {
  age: AgeBreakdown;
  daysUntilBirthday: number;
  historicalEvent: { year: number; event: string };
  quotes: {
    motivational: string;
    inspirational: string[];
  };
}

export const AgeDisplay: React.FC<AgeDisplayProps> = ({
  age,
  daysUntilBirthday,
  historicalEvent,
  quotes
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Age Breakdown */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Your Age Breakdown</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">{age.years}</p>
            <p className="text-gray-600">Years</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">{age.months}</p>
            <p className="text-gray-600">Months</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">{age.days}</p>
            <p className="text-gray-600">Days</p>
          </div>
        </div>
      </div>

      {/* Birthday Countdown */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Birthday Countdown</h2>
        </div>
        <p className="text-lg text-gray-700">
          {daysUntilBirthday} days until your next birthday!
        </p>
      </div>

      {/* Historical Event */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <History className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">On Your Birthday</h2>
        </div>
        <p className="text-lg text-gray-700">{historicalEvent.event}</p>
      </div>

      {/* Motivational Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="w-6 h-6 text-amber-600" />
          <h2 className="text-2xl font-bold text-gray-800">Your Inspiration</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-lg text-gray-700 italic">{quotes.motivational}</p>
          </div>
          <div className="space-y-4">
            {quotes.inspirational.map((quote, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};