import { differenceInYears, differenceInMonths, differenceInDays, addYears, format } from 'date-fns';

export interface AgeBreakdown {
  years: number;
  months: number;
  days: number;
}

export function calculateAge(birthDate: Date): AgeBreakdown {
  const today = new Date();
  const years = differenceInYears(today, birthDate);
  
  const monthsAfterYear = differenceInMonths(today, addYears(birthDate, years)) % 12;
  const nextMonthDate = addYears(birthDate, years);
  nextMonthDate.setMonth(birthDate.getMonth() + monthsAfterYear);
  
  const days = differenceInDays(today, nextMonthDate);

  return { years, months: monthsAfterYear, days };
}

export function getDaysUntilNextBirthday(birthDate: Date): number {
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  
  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  
  return differenceInDays(nextBirthday, today);
}

export function getAgeGroup(years: number): 'under20' | '20-30' | '31-50' | 'over50' {
  if (years < 20) return 'under20';
  if (years <= 30) return '20-30';
  if (years <= 50) return '31-50';
  return 'over50';
}