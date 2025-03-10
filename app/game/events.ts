// events.ts
export type GameEvent = {
    id: string;
    text: string;
    type: "money_gain" | "money_loss" | "money_choice";
    moneyImpact: number; // Impact on money
    friendshipImpact: number; // Impact on friendship
    probability: number; // Controls how often this event appears
  };
  
  export const events: GameEvent[] = [
    { id: "scholarship_bonus", text: "🔥 You got a $200 scholarship bonus!", type: "money_gain", moneyImpact: 200, friendshipImpact: 0, probability: 5 },
    { id: "phone_broke", text: "📱 Your phone screen shattered! -$150 for repairs.", type: "money_loss", moneyImpact: -150, friendshipImpact: 0, probability: 10 },
    { id: "found_wallet", text: "👛 You found a wallet with $50. Keep it!", type: "money_choice", moneyImpact: 50, friendshipImpact: 0, probability: 20 },
    { id: "free_food", text: "🍕 Free campus event! You save $10 on food.", type: "money_gain", moneyImpact: 10, friendshipImpact: 0, probability: 30 },
    { id: "parking_ticket", text: "🚗 You got a parking ticket! -$75", type: "money_loss", moneyImpact: -75, friendshipImpact: 0, probability: 25 },
    { id: "unexpected_gift", text: "🎁 You received a surprise gift of $100!", type: "money_gain", moneyImpact: 100, friendshipImpact: 0, probability: 15 },
    { id: "job_offer", text: "💼 You got a part-time job! +$200 this week.", type: "money_gain", moneyImpact: 200, friendshipImpact: 0, probability: 10 },
    { id: "emergency_expense", text: "🚑 An emergency expense! -$300 for medical bills.", type: "money_loss", moneyImpact: -300, friendshipImpact: 0, probability: 5 },
    { id: "study_grant", text: "📚 You received a study grant of $150!", type: "money_gain", moneyImpact: 150, friendshipImpact: 0, probability: 10 },
    { id: "friend_borrow", text: "🤝 A friend borrowed $50. Will you get it back?", type: "money_choice", moneyImpact: 0, friendshipImpact: 10, probability: 20 },
    { id: "textbook_discount", text: "📖 You found a textbook for $30 instead of $100!", type: "money_gain", moneyImpact: 70, friendshipImpact: 0, probability: 15 },
    { id: "party_invite", text: "🎉 You got invited to a party! -$20 for drinks.", type: "money_loss", moneyImpact: -20, friendshipImpact: 5, probability: 25 },
    { id: "lost_item", text: "🔑 You lost your keys! -$50 for a replacement.", type: "money_loss", moneyImpact: -50, friendshipImpact: 0, probability: 10 },
    { id: "scholarship_application", text: "📝 You applied for a scholarship! +$200 if you get it.", type: "money_choice", moneyImpact: 200, friendshipImpact: 0, probability: 15 },
    { id: "unexpected_fine", text: "⚖️ You received a fine of $100 for late library books.", type: "money_loss", moneyImpact: -100, friendshipImpact: 0, probability: 10 },
    { id: "new_friend", text: "👫 You made a new friend! +10 friendship points.", type: "money_gain", moneyImpact: 0, friendshipImpact: 10, probability: 20 },
    { id: "study_group", text: "📚 You joined a study group! +5 friendship points.", type: "money_gain", moneyImpact: 0, friendshipImpact: 5, probability: 15 },
    { id: "food_stall", text: "🍔 You found a food stall with a special! -$10.", type: "money_loss", moneyImpact: -10, friendshipImpact: 0, probability: 20 },
    { id: "unexpected_rain", text: "🌧️ You got caught in the rain! -$15 for a new umbrella.", type: "money_loss", moneyImpact: -15, friendshipImpact: 0, probability: 10 },
    { id: "free_tickets", text: "🎟️ You won free tickets to a concert! +$50 value.", type: "money_gain", moneyImpact: 50, friendshipImpact: 0, probability: 5 },
    { id: "study_aid", text: "📖 You bought a study aid for $25. Worth it!", type: "money_loss", moneyImpact: -25, friendshipImpact: 0, probability: 15 },
    { id: "car_repair", text: "🚗 Your car needs repairs! -$200.", type: "money_loss", moneyImpact: -200, friendshipImpact: 0, probability: 5 },
    { id: "unexpected_bonus", text: "💰 You received a bonus of $150 from your job!", type: "money_gain", moneyImpact: 150, friendshipImpact: 0, probability: 10 },
    { id: "gift_card", text: "🎁 You received a $50 gift card!", type: "money_gain", moneyImpact: 50, friendshipImpact: 0, probability: 15 },
    { id: "study_break", text: "☕ You took a break and spent $10 on coffee.", type: "money_loss", moneyImpact: -10, friendshipImpact: 0, probability: 20 },
    { id: "new_laptop", text: "💻 You bought a new laptop for $800. Worth it?", type: "money_loss", moneyImpact: -800, friendshipImpact: 0, probability: 5 },
    { id: "unexpected_expense", text: "💸 You lost your dorm keys and need to pay $80.", type: "money_loss", moneyImpact: -80, friendshipImpact: 0, probability: 10 },
    { id: "scholarship_renewal", text: "📜 Your scholarship was renewed! +$200!", type: "money_gain", moneyImpact: 200, friendshipImpact: 0, probability: 10 },
    { id: "new_job", text: "💼 You got a new job! +$300!", type: "money_gain", moneyImpact: 300, friendshipImpact: 0, probability: 5 },
    { id: "study_materials", text: "📚 You bought study materials for $50.", type: "money_loss", moneyImpact: -50, friendshipImpact: 0, probability: 15 },
    { id: "unexpected_income", text: "💵 You received $100 from a relative!", type: "money_gain", moneyImpact: 100, friendshipImpact: 0, probability: 10 },
    { id: "party_expense", text: "🎉 You spent $40 on a party.", type: "money_loss", moneyImpact: -40, friendshipImpact: 0, probability: 20 },
    { id: "new_friendship", text: "👫 You made a new friend! +5 friendship points.", type: "money_gain", moneyImpact: 0, friendshipImpact: 5, probability: 15 },
    { id: "study_group_invite", text: "📚 You were invited to a study group! +5 friendship points.", type: "money_gain", moneyImpact: 0, friendshipImpact: 5, probability: 15 },
    { id: "unexpected_gift", text: "🎁 You received a surprise gift of $50!", type: "money_gain", moneyImpact: 50, friendshipImpact: 0, probability: 10 },
    { id: "unexpected_expense", text: "💸 You had an unexpected expense of $20.", type: "money_loss", moneyImpact: -20, friendshipImpact: 0, probability: 10 },
    { id: "new_experience", text: "🌍 You had a new experience! +10 friendship points.", type: "money_gain", moneyImpact: 0, friendshipImpact: 10, probability: 15 },
    { id: "unexpected_bills", text: "📄 You received unexpected bills! -$100.", type: "money_loss", moneyImpact: -100, friendshipImpact: 0, probability: 5 },
    { id: "study_aid", text: "📖 You bought a study aid for $25. Worth it!", type: "money_loss", moneyImpact: -25, friendshipImpact: 0, probability: 15 },
    { id: "unexpected_rain", text: "🌧️ You got caught in the rain! -$15 for a new umbrella.", type: "money_loss", moneyImpact: -15, friendshipImpact: 0, probability: 10 },
    { id: "new_experience", text: "🌍 You had a new experience! +10 friendship points.", type: "money_gain", moneyImpact: 0, friendshipImpact: 10, probability: 15 },
    { id: "unexpected_bills", text: "📄 You received unexpected bills! -$40.", type: "money_loss", moneyImpact: -40, friendshipImpact: 0, probability: 5 },
  ];