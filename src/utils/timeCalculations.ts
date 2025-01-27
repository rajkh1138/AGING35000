import { differenceInSeconds, differenceInWeeks } from 'date-fns';

export interface TimeBreakdown {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  months: number;
  years: number;
}

export interface LifeStatistics {
  breaths: number;
  heartbeats: number;
  laughs: number;
  sleepingYears: number;
  hairLength: number;
  nailLength: number;
}

export function calculateTotalTime(birthDate: Date): TimeBreakdown {
  const now = new Date();
  const totalSeconds = differenceInSeconds(now, birthDate);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = differenceInWeeks(now, birthDate);
  const totalMonths = Math.floor(totalDays / 30.44); // Average month length
  const totalYears = Math.floor(totalDays / 365.25); // Account for leap years

  return {
    seconds: totalSeconds,
    minutes: totalMinutes,
    hours: totalHours,
    days: totalDays,
    weeks: totalWeeks,
    months: totalMonths,
    years: totalYears
  };
}

export function calculateLifeStatistics(totalDays: number): LifeStatistics {
  // Average values based on scientific data
  const breathsPerMinute = 12;
  const heartbeatsPerMinute = 70;
  const laughsPerDay = 10;
  const sleepHoursPerDay = 8;
  const hairGrowthPerDay = 0.44; // in millimeters
  const nailGrowthPerDay = 0.12; // in millimeters

  return {
    breaths: totalDays * breathsPerMinute * 60 * 24,
    heartbeats: totalDays * heartbeatsPerMinute * 60 * 24,
    laughs: totalDays * laughsPerDay,
    sleepingYears: (totalDays * sleepHoursPerDay) / (24 * 365.25),
    hairLength: (totalDays * hairGrowthPerDay) / 1000, // convert to meters
    nailLength: (totalDays * nailGrowthPerDay) / 1000 // convert to meters
  };
}