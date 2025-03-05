export type Character = {
  id: string;
  name: string;
  description: string;
  startingMoney: number;
  startingFriendship: number;
  traits: string[];
  blurb: string;
};

export const characters: Character[] = [
  {
    id: "scholarship_student",
    name: "Scholarship Student",
    description: "You got a full ride, but money is still tight.",
    startingMoney: 100,
    startingFriendship: 30,
    traits: ["Frugal", "Disciplined", "Budget-focused"],
    blurb: "A smart student who knows how to stretch a dollar.",
  },
  {
    id: "side_hustler",
    name: "Side Hustler",
    description: "You're always finding ways to make extra cash.",
    startingMoney: 200,
    startingFriendship: 40,
    traits: ["Hardworking", "Risk-taker", "Street Smart"],
    blurb: "Always on the grind, looking for the next opportunity.",
  },
  {
    id: "trust_fund_kid",
    name: "Trust Fund Kid",
    description: "Your parents send you money, but you spend fast.",
    startingMoney: 1000,
    startingFriendship: 60,
    traits: ["Carefree", "Generous", "Impulse Spender"],
    blurb: "Living life to the fullest, but money doesn't last long.",
  },
  {
    id: "student_athlete",
    name: "Student Athlete",
    description: "You have a scholarship, but your time is limited.",
    startingMoney: 150,
    startingFriendship: 80,
    traits: ["Disciplined", "Competitive", "Time-Constrained"],
    blurb: "Balancing sports and studies, always on the move.",
  },
  {
    id: "intern",
    name: "The Hustling Intern",
    description: "You have an internship, balancing work and school.",
    startingMoney: 300,
    startingFriendship: 30,
    traits: ["Responsible", "Goal-Oriented", "Overworked"],
    blurb: "Juggling responsibilities, but determined to succeed.",
  },
];
