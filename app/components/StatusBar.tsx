"use client";

export default function StatusBar({ money, weeksLeft, friendship }: { money: number; weeksLeft: number; friendship: number }) {
  return (
    <div className="glass flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg shadow-lg backdrop-blur-lg bg-black/30 border border-yellow-500 text-yellow-400 shadow-yellow-500/50">
      <div className="text-center">
        <p className="text-lg font-semibold">📆 Weeks Left: {weeksLeft}</p>
      </div>
      
      <div className="w-full sm:w-1/3 text-center">
        <p className="text-lg font-semibold">💰 Balance: ${money}</p>
        <div className="progress-container mt-2 bg-yellow-900 rounded-full h-2 overflow-hidden shadow-yellow-500/50" style={{ boxShadow: '0 0 10px 4px rgba(255, 221, 51, 0.8)' }}>
          <div
            className="progress-bar bg-yellow-600 h-full"
            style={{
              width: `${Math.min(money / 1000 * 100, 100)}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="w-full sm:w-1/3 text-center">
        <p className="text-lg font-semibold">🤝 Friendship: {friendship}/100</p>
        <div className="progress-container mt-2 bg-yellow-900 rounded-full h-2 overflow-hidden shadow-yellow-500/50" style={{ boxShadow: '0 0 10px 4px rgba(255, 221, 51, 0.8)' }}>
          <div
            className="progress-bar bg-yellow-600 h-full"
            style={{
              width: `${friendship}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
