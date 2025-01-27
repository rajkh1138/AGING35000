import React, { useState } from 'react';
import { DateInput } from './components/DateInput';
import { AgeDisplay } from './components/AgeDisplay';
import { LiveTimeDisplay } from './components/LiveTimeDisplay';
import { calculateAge, getDaysUntilNextBirthday, getAgeGroup } from './utils/dateCalculations';
import { quotesByAgeGroup } from './data/quotes';
import { getHistoricalEvent } from './data/historicalEvents';

export function App() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleDateSubmit = (date: Date) => {
    setBirthDate(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-rose-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
          Life Journey Calculator
        </h1>
        <p className="text-center text-gray-600 mb-12 animate-fade-in-delayed">
          Discover your life's journey in numbers and find inspiration along the way
        </p>

        {!birthDate && <DateInput onDateSubmit={handleDateSubmit} />}

        {birthDate && (
          <div className="space-y-8 animate-fade-in">
            <LiveTimeDisplay birthDate={birthDate} />
            <AgeDisplay
              age={calculateAge(birthDate)}
              daysUntilBirthday={getDaysUntilNextBirthday(birthDate)}
              historicalEvent={getHistoricalEvent(
                birthDate.getDate(),
                birthDate.getMonth() + 1
              )}
              quotes={quotesByAgeGroup[getAgeGroup(calculateAge(birthDate).years)]}
            />
            <button
              onClick={() => setBirthDate(null)}
              className="mx-auto block px-6 py-2 bg-gray-600 text-white rounded-lg 
                transform transition-all duration-300 hover:bg-gray-700 hover:scale-105"
            >
              Calculate Another Date
            </button>
          </div>
        )}
      </div>
    </div>
  );
}