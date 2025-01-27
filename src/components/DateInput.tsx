import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface DateInputProps {
  onDateSubmit: (date: Date) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ onDateSubmit }) => {
  const [dateString, setDateString] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      setIsAnimating(true);
      setTimeout(() => {
        onDateSubmit(date);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-800">Enter Your Birth Date</h2>
        </div>
        <input
          type="date"
          value={dateString}
          onChange={(e) => setDateString(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          required
        />
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-medium 
            transform transition-all duration-300 hover:bg-indigo-700 hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
            ${isAnimating ? 'animate-pulse' : ''}`}
        >
          Calculate Age
        </button>
      </form>
    </div>
  );
};