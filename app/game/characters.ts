export type Character = {
  id: string;
  name: string;
  description: string;
  startingMoney: number;
  startingFriendship: number;
  traits: string[];
  blurb: string;
  effects: { 
    description: string; // Displayed in the weekly summary
    apply: (state: GameState) => GameState; // Function to modify game state
  }[];
};

export type GameState = {
  money: number;
  friendship: number;
  budget: number;
};

export const characters: Character[] = [
  {
    id: "scholarship_student",
    name: "Scholarship Student",
    description: "You got a full ride, but money is still tight.",
    startingMoney: 100,
    startingFriendship: 30,
    traits: ["Frugal", "Disciplined", "Budget-focused"],
    blurb: "A smart student who knows how to stretch a dollar. Yoou gotta study extra to keep that scholarship though",
    effects: [
      { description: "📖 Studying hard to maintain your scholarship. -5 friendship.", apply: (state) => ({ ...state, friendship: Math.max(0, state.friendship - 5) }) },
      { description: "🎓 Won a small grant for academic excellence! +$100", apply: (state) => ({ ...state, money: state.money + 100 }) },
      { description: "😓 Burnt out from studying. No changes this week.", apply: (state) => state },
      { description: "📚 Found a tutoring gig! +$50", apply: (state) => ({ ...state, money: state.money + 50 }) },
      { description: "💡 Got a genius idea for a research paper! No effect, but you're feeling inspired.", apply: (state) => state },
      { description: "🥳 Took a break to hang out with friends. +10 friendship.", apply: (state) => ({ ...state, friendship: Math.min(100, state.friendship + 10) }) },
      { description: "🛒 Spent money on books and supplies. -$40.", apply: (state) => ({ ...state, money: state.money - 40 }) },
      { description: "💰 Received an unexpected academic scholarship! +$150.", apply: (state) => ({ ...state, money: state.money + 150 }) },
      { description: "🤯 Overwhelmed with assignments. -5 friendship.", apply: (state) => ({ ...state, friendship: Math.max(0, state.friendship - 5) }) },
      { description: "🍽 Free food at the student center saved you money! +$20.", apply: (state) => ({ ...state, money: state.money + 20 }) }
    ]
  },
  {
    id: "side_hustler",
    name: "Side Hustler",
    description: "You're always finding ways to make extra cash.",
    startingMoney: 200,
    startingFriendship: 40,
    traits: ["Hardworking", "Risk-taker", "Street Smart"],
    blurb: "Always on the grind, looking for the next opportunity.",
    effects: [
      { description: "💼 Your hustle paid off! Earned $50.", apply: (state) => ({ ...state, money: state.money + 50 }) },
      { description: "🤝 Took time off work to chill with friends. +5 friendship.", apply: (state) => ({ ...state, friendship: Math.min(100, state.friendship + 5) }) },
      { description: "📉 Bad investment! Lost $30.", apply: (state) => ({ ...state, money: state.money - 30 }) },
      { description: "🚀 Side hustle exploded! Made an extra $200.", apply: (state) => ({ ...state, money: state.money + 200 }) },
      { description: "🍔 Ate out too much while working. -$20.", apply: (state) => ({ ...state, money: state.money - 20 }) },
      { description: "🔋 Feeling exhausted from all the work. No effect this week.", apply: (state) => state },
      { description: "🛍 Bought some new gear for your business. -$50.", apply: (state) => ({ ...state, money: state.money - 50 }) },
      { description: "💡 Came up with a new side hustle idea! No effect yet.", apply: (state) => state },
      { description: "💰 Made a great business deal! +$100.", apply: (state) => ({ ...state, money: state.money + 100 }) },
      { description: "📢 Your side hustle went viral! +$300.", apply: (state) => ({ ...state, money: state.money + 300 }) }
    ]
  },
  {
    id: "trust_fund_kid",
    name: "Trust Fund Kid",
    description: "Your parents send you money, but you spend fast.",
    startingMoney: 1000,
    startingFriendship: 60,
    traits: ["Carefree", "Generous", "Impulse Spender"],
    blurb: "Living life to the fullest, but money doesn't last long.",
    effects: [
      { description: "💳 Splurged on a luxury item. -$100.", apply: (state) => ({ ...state, money: state.money - 100 }) },
      { description: "🎉 Threw a huge party! -$50, +10 friendship.", apply: (state) => ({ ...state, money: state.money - 50, friendship: Math.min(100, state.friendship + 10) }) },
      { description: "💰 Parents sent extra cash! +$200.", apply: (state) => ({ ...state, money: state.money + 200 }) },
      { description: "🛫 Took a spontaneous weekend trip. -$300.", apply: (state) => ({ ...state, money: state.money - 300 }) },
      { description: "🍾 Treated your friends to dinner. -$100, +10 friendship.", apply: (state) => ({ ...state, money: state.money - 100, friendship: Math.min(100, state.friendship + 10) }) },
      { description: "🛍 Bought a designer outfit. -$150.", apply: (state) => ({ ...state, money: state.money - 150 }) },
      { description: "💸 Donated to charity. -$75, +5 friendship.", apply: (state) => ({ ...state, money: state.money - 75, friendship: Math.min(100, state.friendship + 5) }) },
      { description: "🏦 Parents cut your allowance this week. -$200.", apply: (state) => ({ ...state, money: state.money - 200 }) },
      { description: "📉 Made a bad stock investment. -$250.", apply: (state) => ({ ...state, money: state.money - 250 }) },
      { description: "🏆 Won a poker game! +$500.", apply: (state) => ({ ...state, money: state.money + 500 }) }
    ]
  },
  {
    id: "student_athlete",
    name: "Student Athlete",
    description: "You have a scholarship, but your time is limited.",
    startingMoney: 250,
    startingFriendship: 80,
    traits: ["Disciplined", "Competitive", "Time-Constrained"],
    blurb: "Balancing sports and studies, always on the move.",
    effects: [
      { description: "🏆 Won the big game! +$100, +10 friendship.", apply: (state) => ({ ...state, money: state.money + 100, friendship: Math.min(100, state.friendship + 10) }) },
      { description: "📚 Studied instead of practicing. +$50, -5 friendship.", apply: (state) => ({ ...state, money: state.money + 50, friendship: state.friendship - 5 }) },
      { description: "💪 Extra practice paid off! +5 friendship.", apply: (state) => ({ ...state, friendship: Math.min(100, state.friendship + 5) }) },
      { description: "🥵 Got injured. No effect this week.", apply: (state) => state },
      { description: "🍕 Team dinner! -$30, +10 friendship.", apply: (state) => ({ ...state, money: state.money - 30, friendship: Math.min(100, state.friendship + 10) }) },
      { description: "💤 Too tired to socialize. -5 friendship.", apply: (state) => ({ ...state, friendship: state.friendship - 5 }) },
      { description: "📉 Lost the big game. -5 friendship.", apply: (state) => ({ ...state, friendship: state.friendship - 5 }) },
      { description: "💰 Got a sports sponsorship! +$200.", apply: (state) => ({ ...state, money: state.money + 200 }) },
      { description: "🎤 Gave a motivational speech. +10 friendship.", apply: (state) => ({ ...state, friendship: Math.min(100, state.friendship + 10) }) },
      { description: "🔥 Highlight reel went viral! +$150.", apply: (state) => ({ ...state, money: state.money + 150 }) }
    ]
  },
  {
    id: "intern",
    name: "The Hustling Intern",
    description: "You have an internship, balancing work and school.",
    startingMoney: 300,
    startingFriendship: 30,
    traits: ["Responsible", "Goal-Oriented", "Overworked"],
    blurb: "Juggling responsibilities, but determined to succeed. That internship money is good, but you have less time to socialize.",
    effects: [
      {description: "💼 Got your paycheck from the internship! +$200.", apply: (state) => ({ ...state, money: state.money + 200 })},
      {description: "😓 Internship is exhausting, no time for social life. -5 friendship.", apply: (state) => ({ ...state, friendship: Math.max(0, state.friendship - 5) })},
      {description: "🚀 Boss noticed your hard work! Promotion incoming?", apply: (state) => state},
      {description: "🗣️ Had a productive meeting with your boss! +10 friendship.", apply: (state) => ({ ...state, friendship: Math.min(100, state.friendship + 10) })},
      {description: "📉 Missed a deadline. -10 friendship.", apply: (state) => ({ ...state, friendship: Math.max(0, state.friendship - 10) })},
      {description: "📅 Managed to balance work and study! +$50.", apply: (state) => ({ ...state, money: state.money + 50 })},
      {description: "🎉 Finished a project early! +$100.", apply: (state) => ({ ...state, money: state.money + 100 })},
      {description: "📚 Took a break to study for exams. -$20.", apply: (state) => ({ ...state, money: state.money - 20 })},
      {description: "😴 Stayed up late working. -5 friendship.", apply: (state) => ({ ...state, friendship: Math.max(0, state.friendship - 5) })},
      {description: "💡 Got a great idea for the internship project! No effect yet.", apply: (state) => state}
    ]
  },
];
