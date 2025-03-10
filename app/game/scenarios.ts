export type ScenarioChoice = 
  | { label: string; moneyImpact: number; friendshipImpact?: number }  // Simple choice (fixed impact)
  | { label: string; outcomes: { chance: number; moneyImpact: number; friendshipImpact: number; description: string }[] }; // Randomized choice

export type ScenarioType = {
  id: string;
  text: string;
  choices: ScenarioChoice[];
};
  
  export const scenarios: ScenarioType[] = [
    // 🏫 SCHOOL & STUDY LIFE
    {
      id: "textbook_dilemma",
      text: "You need a textbook for a class. What’s your move?",
      choices: [
        { label: "Buy it new ($120)", moneyImpact: -120 },
        { label: "Find a used copy ($50)", moneyImpact: -50 },
        { label: "Borrow from the library (Free)", moneyImpact: 0 },
      ],
    },
    {
      id: "cheating_risk",
      text: "A classmate offers you a stolen copy of the final exam. What do you do?",
      choices: [
        {
          label: "Take it and hope for the best",
          outcomes: [
            { chance: 0.3, moneyImpact: 0, friendshipImpact: 30, description: "You get away with it, people think you are cool." },
            { chance: 0.7, moneyImpact: 0, friendshipImpact: -20, description: "You get caught and face consequences!" }
          ],
        },
        { label: "Refuse and report them", moneyImpact: 0, friendshipImpact: 10 },
        { label: "Ignore and study yourself", moneyImpact: 0 },
      ],
    },
    {
      id: "study_group",
      text: "Your friends invite you to a study group. Do you join?",
      choices: [
        { label: "Yes, teamwork makes the dream work!", moneyImpact: 0, friendshipImpact: 10 },
        { label: "No, I prefer studying alone", moneyImpact: 0, friendshipImpact: -5 },
      ],
    },
    {
      id: "late_assignment",
      text: "You forgot about an assignment due tomorrow. What do you do?",
      choices: [
        { label: "Pull an all-nighter to finish it", moneyImpact: 0, friendshipImpact: -10 },
        { label: "Ask for an extension", moneyImpact: 0, friendshipImpact: 5 },
        { label: "Submit it late and take the penalty", moneyImpact: 0 },
      ],
    },
    {
      id: "group_project",
      text: "Your group project partner isn’t doing their part. What do you do?",
      choices: [
        { label: "Do their work for them", moneyImpact: 0, friendshipImpact: -10 },
        { label: "Confront them and demand they contribute", moneyImpact: 0, friendshipImpact: -5 },
        { label: "Talk to the professor about it", moneyImpact: 0, friendshipImpact: 10 },
      ],
    },
    {
      id: "scholarship_application",
      text: "You have the chance to apply for a scholarship. Do you?",
      choices: [
        {
          label: "Yes, every bit helps!",
          outcomes: [
            { chance: 0.2, moneyImpact: 500, friendshipImpact: -5, description: "Your application is successful! You receive the scholarship." },
            { chance: 0.8, moneyImpact: 0, friendshipImpact: -5, description: "You apply, but you don’t win the scholarship." },
          ],
        },
        { label: "No, it’s too much work", moneyImpact: 0 },
      ],
    },
  
    // 💰 MONEY MAKING
    {
      id: "side_hustle",
      text: "You have a chance to do some quick freelance work for $100. Do you?",
      choices: [
        { label: "Yes, extra cash is always good!", moneyImpact: 100, friendshipImpact: -20 },
        { label: "No, I don’t have time", moneyImpact: 0, friendshipImpact: 5 },
      ],
    },
    {
      id: "sell_old_books",
      text: "Your old textbooks are collecting dust. Sell them?",
      choices: [
        { label: "Sell them for $75", moneyImpact: 75, friendshipImpact: 0 },
        { label: "Keep them for sentimental value", moneyImpact: 0 },
        { label: "Give them to a friend who needs them", moneyImpact: 0, friendshipImpact: 10 },
      ],
    },
    {
      id: "plasma_donation",
      text: "You hear that plasma donation pays $50 per session. Do you go for it?",
      choices: [
        { label: "Yes, easy money!", moneyImpact: 50, friendshipImpact: -5 },
        { label: "No, sounds sketchy", moneyImpact: 0 },
      ],
    },
    {
      id: "gig_economy",
      text: "A friend offers you a gig delivering food for $80. Do you take it?",
      choices: [
        { label: "Yes, I need the money!", moneyImpact: 80, friendshipImpact: 5 },
        { label: "No, I’m too busy", moneyImpact: 0 },
      ],
    },
    {
      id: "investing_opportunity",
      text: "A classmate suggests investing $100 in a startup. What do you do?",
      choices: [
        {
          label: "Invest and hope for the best",
          outcomes: [
            { chance: 0.3, moneyImpact: 200, friendshipImpact: 0,  description: "The startup takes off! You double your money!" },
            { chance: 0.4, moneyImpact: -50, friendshipImpact: 0, description: "The startup struggles, and you only recover half your investment." },
            { chance: 0.3, moneyImpact: -100, friendshipImpact: 0, description: "The startup fails, and you lose everything." },
          ],
        },
        { label: "Decline, it’s too risky", moneyImpact: 0 },
      ],
    },
  
    // 🎉 SOCIAL LIFE & PARTIES
    {
      id: "party_invite",
      text: "Your friends invite you to a wild party. What do you do?",
      choices: [
        { label: "Go and spend $50 on drinks", moneyImpact: -50, friendshipImpact: 10 },
        { label: "Stay home and save money", moneyImpact: 0, friendshipImpact: -5 },
        { label: "Host the party and charge entry (+$30)", moneyImpact: 30, friendshipImpact: 15 },
      ],
    },
    {
      id: "spring_break",
      text: "Spring Break is coming up. Your friends want to go on a trip.",
      choices: [
        { label: "Go all out! ($500)", moneyImpact: -500, friendshipImpact: 30 },
        { label: "Take a budget trip ($200)", moneyImpact: -200, friendshipImpact: 10 },
        { label: "Stay home and save ($0)", moneyImpact: 0, friendshipImpact: -30 },
      ],
    },
    {
      id: "music_festival",
      text: "A huge music festival is happening this weekend. Tickets are $250.",
      choices: [
        { label: "Buy the ticket and go!", moneyImpact: -250, friendshipImpact: 20 },
        { label: "Skip it, too expensive", moneyImpact: 0, friendshipImpact: -20 },
        {
          label: "Sneak in (risk getting caught)",
          outcomes: [
            { chance: 0.7, moneyImpact: 0, friendshipImpact: 10, description: "You sneak in successfully and have a great time!" },
            { chance: 0.3, moneyImpact: -500, friendshipImpact: -10, description: "You get caught, fined, and embarrassed!" },
          ],
        },
      ],
    },
    {
      id: "friend_birthday",
      text: "It’s your friend’s birthday, and they’re throwing a party. What do you do?",
      choices: [
        { label: "Buy a gift ($50)", moneyImpact: -50, friendshipImpact: 15 },
        { label: "Skip the party", moneyImpact: 0, friendshipImpact: -10 },
        { label: "Make a homemade gift", moneyImpact: 0, friendshipImpact: 10 },
      ],
    },
  
    // 🚗 TRANSPORT & LIVING EXPENSES
    {
      id: "car_breakdown",
      text: "Your car broke down, and repairs cost $70. What do you do?",
      choices: [
        { label: "Pay for repairs now", moneyImpact: -70 },
        { label: "Use public transport ($20/week)", moneyImpact: -20 },
        { label: "Ask your parents for money", moneyImpact: -10, friendshipImpact: -5 },
      ],
    },
    {
      id: "roommate_issue",
      text: "Your roommate hasn’t paid their share of rent. What do you do?",
      choices: [
        { label: "Cover it ($400) and hope they pay you back", moneyImpact: -400, friendshipImpact: 5 },
        { label: "Confront them and demand payment", moneyImpact: 0, friendshipImpact: -10 },
      ],
    },
    {
      id: "moving_out",
      text: "You’re tired of your noisy dorm and want to move into an apartment. The rent is higher.",
      choices: [
        { label: "Move out ($600/month)", moneyImpact: -600, friendshipImpact: 10 },
        { label: "Stay in the dorm (cheaper)", moneyImpact: 0, friendshipImpact: -5 },
      ],
    },
    {
      id: "parking_ticket",
      text: "You got a parking ticket! It costs $75. What do you do?",
      choices: [
        { label: "Pay the ticket", moneyImpact: -75 },
        {
          label: "Try to contest it in court",
          outcomes: [
            { chance: 0.5, moneyImpact: 50, friendshipImpact: 0, description: "The judge rules in your favor. Receive compensation!" },
            { chance: 0.5, moneyImpact: -100, friendshipImpact: 0, description: "You lose the case and have to pay court fees!" },
          ],
        },
      ],
    },
  
    // 🍔 FOOD & HEALTH
    {
      id: "meal_plan",
      text: "Your college meal plan is running low. What do you do?",
      choices: [
        { label: "Buy groceries and cook ($40)", moneyImpact: -40 },
        { label: "Survive on ramen and free campus food ($5)", moneyImpact: -5 },
        { label: "Eat out every day ($80)", moneyImpact: -80 },
      ],
    },
    {
      id: "sick_no_insurance",
      text: "You’re sick and need to see a doctor, but you don’t have insurance.",
      choices: [
        { label: "Go to urgent care ($150)", moneyImpact: -150 },
        { label: "Wait and hope you get better", moneyImpact: 0 },
      ],
    },
    {
      id: "gym_membership",
      text: "A gym membership costs $30/month. Do you sign up?",
      choices: [
        { label: "Yes, health is wealth!", moneyImpact: -30, friendshipImpact: 5 },
        { label: "No, too expensive", moneyImpact: 0, friendshipImpact: -5 },
      ],
    },
    {
      id: "fast_food",
      text: "You’re craving fast food. What do you do?",
      choices: [
        { label: "Splurge on a meal ($15)", moneyImpact: -15 },
        { label: "Cook at home instead", moneyImpact: 0 },
      ],
    },
  
    // 💻 TECH & ONLINE EXPENSES
    {
      id: "streaming_services",
      text: "You’re subscribed to 4 streaming services ($50/month). Do you cancel some?",
      choices: [
        { label: "Cancel all but one (+$30)", moneyImpact: 30 },
        { label: "Keep them all (No impact)", moneyImpact: 0 },
      ],
    },
    {
      id: "lost_phone",
      text: "You lost your phone. A new one costs $800.",
      choices: [
        { label: "Buy a cheap replacement ($200)", moneyImpact: -200 },
        { label: "Get a high-end phone ($800)", moneyImpact: -800 },
      ],
    },
    {
      id: "laptop_upgrade",
      text: "Your laptop is old and lagging. A new one is $1000.",
      choices: [
        { label: "Buy it now ($1000)", moneyImpact: -1000 },
        { label: "Wait until next semester", moneyImpact: 0 },
      ],
    },
    {
      id: "software_subscription",
      text: "You need a software subscription for class. It costs $100/year.",
      choices: [
        { label: "Buy it", moneyImpact: -100 },
        { label: "Find a free alternative", moneyImpact: 0 },
      ],
    },
  
    // 🛠️ MISCELLANEOUS
    {
      id: "charity_donation",
      text: "A charity is asking for donations. What do you do?",
      choices: [
        { label: "Donate $20", moneyImpact: -20, friendshipImpact: 10 },
        { label: "Ignore the request", moneyImpact: -5 },
      ],
    },
    {
      id: "lottery_ticket",
      text: "A friend suggests buying a lottery ticket for $10. What do you do?",
      choices: [
        {
          label: "Buy it, you never know!",
          outcomes: [
            { chance: 0.01, moneyImpact: 100000, friendshipImpact: 0, description: "You win the jackpot! Life-changing money!" },
            { chance: 0.09, moneyImpact: 50, friendshipImpact: 0, description: "You win a small prize, better than nothing." },
            { chance: 0.9, moneyImpact: -10, friendshipImpact: 0, description: "You don't win anything. Typical lottery." },
          ],
        },
        { label: "Save your money", moneyImpact: 0 },
      ],
    },
    {
      id: "pet_adoption",
      text: "You’re considering adopting a pet. What do you do?",
      choices: [
        { label: "Adopt a pet ($200)", moneyImpact: -200, friendshipImpact: 20 },
        { label: "Wait until you’re more stable", moneyImpact: 0 },
      ],
    },
    {
        id: "final_exam_cram",
        text: "Your final exam is tomorrow, and you’re not prepared. What do you do?",
        choices: [
          { label: "Pull an all-nighter to study", moneyImpact: 0, friendshipImpact: -10 },
          { label: "Ask a friend for help", moneyImpact: 0, friendshipImpact: 10 },
          { label: "Wing it and hope for the best", moneyImpact: 0 },
        ],
      },
      {
        id: "group_project_conflict",
        text: "Your group project partner isn’t contributing. What do you do?",
        choices: [
          { label: "Do their work for them", moneyImpact: 0, friendshipImpact: -10 },
          { label: "Confront them and demand they contribute", moneyImpact: 0, friendshipImpact: -5 },
          { label: "Talk to the professor about it", moneyImpact: 0, friendshipImpact: 10 },
        ],
      },
      {
        id: "scholarship_essay",
        text: "You have the chance to apply for a $500 scholarship, but the essay is due tomorrow. What do you do?",
        choices: [
          {
            label: "Stay up all night to write it",
            outcomes: [
              { chance: 0.2, moneyImpact: 500, friendshipImpact: -10, description: "Your hard work pays off! You win the scholarship." },
              { chance: 0.8, moneyImpact: 0, friendshipImpact: -10, description: "You submit the essay, but it's not selected." },
            ],
          },
          { label: "Ask a friend to help you", moneyImpact: 0, friendshipImpact: 10 },
          { label: "Skip it, it’s too much work", moneyImpact: 0 },
        ],
      },
    
      // 💰 FINANCIAL DECISIONS
      {
        id: "tax_refund",
        text: "You received a $300 tax refund. What do you do with it?",
        choices: [
          { label: "Save it for emergencies", moneyImpact: 300 },
          { label: "Splurge on a new gadget", moneyImpact: -300 },
          { label: "Invest it in stocks", moneyImpact: -300 },
        ],
      },
      {
        id: "credit_card_offer",
        text: "You’re offered a credit card with a $500 limit. Do you take it?",
        choices: [
          { label: "Yes, it could be useful", moneyImpact: 0 },
          { label: "No, I don’t want to risk debt", moneyImpact: 0 },
        ],
      },
      {
        id: "broke_before_payday",
        text: "You’re out of money, but payday is a week away. What do you do?",
        choices: [
          { label: "Borrow from a friend", moneyImpact: 50, friendshipImpact: -10 },
          { label: "Sell some old stuff", moneyImpact: 100 },
          { label: "Tighten your belt and wait", moneyImpact: 0 },
        ],
      },
    
      // 🎉 SOCIAL LIFE
      {
        id: "friend_birthday",
        text: "It’s your friend’s birthday, and they’re throwing a party. What do you do?",
        choices: [
          { label: "Buy a gift ($50)", moneyImpact: -50, friendshipImpact: 15 },
          { label: "Skip the party", moneyImpact: 0, friendshipImpact: -10 },
          { label: "Make a homemade gift", moneyImpact: 0, friendshipImpact: 10 },
        ],
      },
      {
        id: "roommate_party",
        text: "Your roommate is throwing a party in your dorm. What do you do?",
        choices: [
          { label: "Join the fun", moneyImpact: -20, friendshipImpact: 10 },
          { label: "Ask them to keep it down", moneyImpact: 0, friendshipImpact: -5 },
          { label: "Leave and stay with a friend", moneyImpact: 0 },
        ],
      },
      {
        id: "dating_dilemma",
        text: "You’re asked out on a date, but it’s expensive. What do you do?",
        choices: [
          { label: "Go all out ($100)", moneyImpact: -100, friendshipImpact: 20 },
          { label: "Suggest a cheaper option", moneyImpact: -50, friendshipImpact: 10 },
          { label: "Decline the date", moneyImpact: 0, friendshipImpact: -10 },
        ],
      },
    
      // 🚗 TRANSPORT
      {
        id: "car_breakdown",
        text: "Your car broke down, and repairs cost $200. What do you do?",
        choices: [
          { label: "Pay for repairs", moneyImpact: -200 },
          { label: "Use public transport instead", moneyImpact: -50 },
          { label: "Ask your parents for help", moneyImpact: -100, friendshipImpact: -5 },
        ],
      },
      {
        id: "bike_theft",
        text: "Your bike was stolen. A new one costs $150. What do you do?",
        choices: [
          { label: "Buy a new bike", moneyImpact: -150 },
          { label: "Start walking everywhere", moneyImpact: 0 },
          { label: "Report it to the police", moneyImpact: 0 },
        ],
      },
      {
        id: "ride_share",
        text: "You need a ride to campus. A ride-share costs $20. What do you do?",
        choices: [
          { label: "Take the ride-share", moneyImpact: -20 },
          { label: "Ask a friend for a ride", moneyImpact: 0, friendshipImpact: 5 },
          { label: "Walk instead", moneyImpact: 0 },
        ],
      },
    
      // 🍔 FOOD & HEALTH
      {
        id: "meal_plan_choice",
        text: "You’re deciding on a meal plan for the semester. What do you choose?",
        choices: [
          { label: "Unlimited meals ($1000)", moneyImpact: -1000 },
          { label: "Limited meals ($500)", moneyImpact: -500 },
          { label: "No meal plan, cook for yourself", moneyImpact: 0 },
        ],
      },
      {
        id: "gym_membership",
        text: "A gym membership costs $30/month. Do you sign up?",
        choices: [
          { label: "Yes, health is wealth!", moneyImpact: -30, friendshipImpact: 5 },
          { label: "No, too expensive", moneyImpact: 0 },
        ],
      },
      {
        id: "fast_food_craving",
        text: "You’re craving fast food. What do you do?",
        choices: [
          { label: "Splurge on a meal ($15)", moneyImpact: -15 },
          { label: "Cook at home instead", moneyImpact: 0 },
        ],
      },
    
      // 💻 TECH & ONLINE
      {
        id: "phone_upgrade",
        text: "Your phone is old and slow. A new one costs $800. What do you do?",
        choices: [
          { label: "Buy the latest model", moneyImpact: -800 },
          { label: "Buy a cheaper model", moneyImpact: -300 },
          { label: "Keep your current phone", moneyImpact: 0 },
        ],
      },
      {
        id: "streaming_subscriptions",
        text: "You’re subscribed to 3 streaming services ($40/month). Do you cancel any?",
        choices: [
          { label: "Cancel all but one", moneyImpact: 10 },
          { label: "Keep them all", moneyImpact: 0 },
        ],
      },
      {
        id: "online_shopping",
        text: "You see a great deal online for $100. What do you do?",
        choices: [
          { label: "Buy it", moneyImpact: -100 },
          { label: "Save your money", moneyImpact: 0 },
        ],
      },
    
      // 🛠️ MISCELLANEOUS
      {
        id: "charity_donation",
        text: "A charity is asking for donations. What do you do?",
        choices: [
          { label: "Donate $20", moneyImpact: -20, friendshipImpact: 10 },
          { label: "Ignore the request", moneyImpact: 0 },
        ],
      },
      {
        id: "lottery_ticket",
        text: "A friend suggests buying a lottery ticket for $10. What do you do?",
        choices: [
          {
            label: "Buy it, you never know!",
            outcomes: [
              { chance: 0.01, moneyImpact: 1000, friendshipImpact: 0, description: "You win the jackpot! Life-changing money!" },
              { chance: 0.09, moneyImpact: 50, friendshipImpact: 0, description: "You win a small prize, better than nothing." },
              { chance: 0.9, moneyImpact: -10, friendshipImpact: 0, description: "You don't win anything. Typical lottery." },
            ],
          },
          { label: "Save your money", moneyImpact: 0 },
        ],
      },
      {
        id: "pet_adoption",
        text: "You’re considering adopting a pet. What do you do?",
        choices: [
          { label: "Adopt a pet ($200)", moneyImpact: -200, friendshipImpact: 20 },
          { label: "Wait until you’re more stable", moneyImpact: 0 },
        ],
      },
      {
        id: "spring_cleaning",
        text: "You’re cleaning out your dorm and find old items. What do you do?",
        choices: [
          { label: "Sell them for $50", moneyImpact: 50 },
          { label: "Donate them to charity", moneyImpact: 0, friendshipImpact: 10 },
          { label: "Throw them away", moneyImpact: 0 },
        ],
      },
      {
        id: "time_management",
        text: "You’re overwhelmed with assignments and social events. What do you do?",
        choices: [
          { label: "Focus on academics", moneyImpact: 0, friendshipImpact: -10 },
          { label: "Balance both", moneyImpact: 0, friendshipImpact: 5 },
          { label: "Focus on social life", moneyImpact: 0, friendshipImpact: 10 },
        ],
      },
      {
        id: "internship_offer",
        text: "You’re offered an unpaid internship. What do you do?",
        choices: [
          { label: "Take it for the experience", moneyImpact: 0 },
          { label: "Decline and look for a paid job", moneyImpact: 0 },
        ],
      },
      {
        id: "car_pool",
        text: "A friend asks you to carpool to campus. What do you do?",
        choices: [
          { label: "Agree and split gas costs", moneyImpact: -10, friendshipImpact: 10 },
          { label: "Decline and walk alone", moneyImpact: 0, friendshipImpact: -5 },
        ],
      },
      {
        id: "textbook_resell",
        text: "You’re done with a textbook. What do you do with it?",
        choices: [
          { label: "Sell it for $50", moneyImpact: 50 },
          { label: "Keep it for future reference", moneyImpact: 0 },
          { label: "Give it to a friend", moneyImpact: 0, friendshipImpact: 10 },
        ],
      },
      {
        id: "fashion_show",
        text: "Your friend suggest joining a fashion show with him. what do you do?",
        choices: [
          {
            label: "Yes, it will be fun",
            outcomes: [
              { chance: 0.8, moneyImpact: 0, friendshipImpact: 20,  description: "The show goes great, people loved your outfit" },
              { chance: 0.2, moneyImpact: 0, friendshipImpact: -30, description: "You flop mid show and there are clips going round!." },
            ],
          },
          { label: "Decline, I don't have what it takes", moneyImpact: 0, friendshipImpact: -10 },
        ],
      },
  ];