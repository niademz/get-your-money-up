"use client";

const getPersona = (money: number, friendship: number) => {
  // 💰 Money-based personas
  if (money >= 2000) {
    if (friendship >= 90) return "💎 Supreme Overlord of Wealth and Friends";
    if (friendship >= 70) return "🤑 Rich and Popular Legend";
    if (friendship >= 50) return "🏦 Bank Account Hero, Social Zero";
    return "💸 Lonely Millionaire";
  }

  if (money >= 1000) {
    if (friendship >= 90) return "🌟 Financial Wizard with a Heart of Gold";
    if (friendship >= 70) return "💰 Wealth Builder with a Social Life";
    if (friendship >= 50) return "💼 Corporate Climber";
    return "🏢 Rich but Lonely Workaholic";
  }

  if (money >= 500) {
    if (friendship >= 90) return "🎉 Life of the Party with Savings";
    if (friendship >= 70) return "🍀 Lucky and Loved";
    if (friendship >= 50) return "📈 Balanced and Thriving";
    return "💵 Comfortable but Quiet";
  }

  if (money >= 200) {
    if (friendship >= 90) return "🤗 Beloved and Budget-Savvy";
    if (friendship >= 70) return "😎 Chill and Charismatic";
    if (friendship >= 50) return "📊 Stable and Social";
    return "🪙 Frugal and Focused";
  }

  if (money >= 100) {
    if (friendship >= 90) return "💖 Loved but Broke";
    if (friendship >= 70) return "😅 Struggling but Popular";
    if (friendship >= 50) return "🛠️ Hustling and Hopeful";
    return "🍞 Barely Making It";
  }

  // 💔 Low money personas
  if (friendship >= 90) return "❤️‍🩹 Broke but Beloved";
  if (friendship >= 70) return "🎭 Party Legend, Wallet Empty";
  if (friendship >= 50) return "💀 Struggling but Social";
  return "🪦 Flat Broke and Lonely";
};

const giveLesson = (money: number) => {
  if (money >= 2000) return "🔥 Amazing! You're a financial master!";
  if (money >= 1000) return "💡 Smart choices! Keep building wealth.";
  if (money >= 500) return "💸 Not bad! You can still save more!";
  if (money >= 100) return "⚠️ Try to cut unnecessary expenses!";
  return "🚨 Yikes! You need a financial intervention!";
};

export default function GameOver({ money = 0, friendship = 50, history = [], onRestart }: { money?: number; friendship?: number; history: { text: string; choice: string }[]; onRestart: () => void }) {
  return (
    <div className="glass text-center max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">🏁 Game Over!</h2>

      <div className="bg-black/40 border border-yellow-500 p-4 rounded-lg shadow-lg">
        <p className="text-2xl font-semibold text-yellow-300">Your Financial Persona:</p>
        <p className="text-3xl font-bold text-yellow-500">{getPersona(money, friendship)}</p>
        <br></br>
        <p className="text-xl font-semibold text-yellow-400 mt-6">{giveLesson(money)}</p>
      </div>

      <div className="flex justify-around items-center mt-6">
        <div className="text-center">
          <p className="text-lg font-semibold text-green-400">💰 Final Balance</p>
          <p className="text-2xl font-bold text-green-300">${money}</p>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-blue-400">🤝 Friendship Rating</p>
          <p className="text-2xl font-bold text-blue-300">{friendship}/100</p>
        </div>
      </div>

      <div className="mt-6 bg-black/40 border border-yellow-500 p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-yellow-300 mb-3">📖 Your Journey</h3>
        <div className="text-left max-h-52 overflow-y-auto space-y-2 p-2 bg-black/30 rounded scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-transparent">
          {history.map((entry: { text: string; choice: string }, index: number) => (
            <div key={index} className="p-2 border-b border-yellow-600">
              <p className="text-yellow-400 font-bold">{entry.text}</p>
              <p className="text-yellow-300">👉 {entry.choice}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-yellow-400 space-y-2">
        <p>✅ Budget your expenses.</p>
        <p>🎓 Apply for scholarships.</p>
        <p>🥘 Cook at home more.</p>
        <p>💼 Consider a part-time job.</p>
        <p>🏦 Save & track loans carefully.</p>
      </div>

      <button 
        className="btn mt-6 w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-800"
        onClick={onRestart}
      >
        Restart Game 🚀
      </button>
    </div>
  );
}