interface QuotesByAgeGroup {
  [key: string]: {
    motivational: string;
    inspirational: string[];
  };
}

export const quotesByAgeGroup: QuotesByAgeGroup = {
  'under20': {
    motivational: "Your youth is your greatest asset. Dream big, learn constantly, and don't be afraid to make mistakes – they're your best teachers.",
    inspirational: [
      "All our dreams can come true if we have the courage to pursue them. - Walt Disney",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Don't wait for opportunity. Create it. - George Bernard Shaw"
    ]
  },
  '20-30': {
    motivational: "You're in your prime years of self-discovery and growth. Take risks, build your foundation, and remember that your journey is unique.",
    inspirational: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill"
    ]
  },
  '31-50': {
    motivational: "You've gained wisdom and experience. Now is the time to leverage your knowledge, maintain balance, and make your mark on the world.",
    inspirational: [
      "Life is not about finding yourself. Life is about creating yourself. - George Bernard Shaw",
      "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
      "It's never too late to be what you might have been. - George Eliot"
    ]
  },
  'over50': {
    motivational: "Your journey has equipped you with invaluable wisdom. Share your knowledge, embrace new adventures, and continue to grow and inspire others.",
    inspirational: [
      "Age is an issue of mind over matter. If you don't mind, it doesn't matter. - Mark Twain",
      "The longer I live, the more beautiful life becomes. - Frank Lloyd Wright",
      "None are so old as those who have outlived enthusiasm. - Henry David Thoreau"
    ]
  }
};