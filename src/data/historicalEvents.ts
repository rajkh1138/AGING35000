interface HistoricalEvent {
  year: number;
  event: string;
}

export const getHistoricalEvent = (day: number, month: number): HistoricalEvent => {
  // June 25th historical events
  const events: HistoricalEvent[] = [
    { year: 1876, event: "Battle of Little Bighorn: Custer's Last Stand" },
    { year: 1950, event: "The Korean War began" },
    { year: 1978, event: "The rainbow flag was first flown as a symbol of LGBTQ+ pride" },
    { year: 1996, event: "On your birth year, the world was witnessing major technological advancements with the rise of the internet and personal computing" }
  ];

  if (day === 25 && month === 6) {
    return events[3]; // Return your birth year event
  }

  return { year: 2024, event: "No significant historical event found for this date" };
};