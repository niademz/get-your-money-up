"use client";

export default function Scenario({ onChoose, scenario }: { onChoose: (moneyImpact: number, choiceLabel: string, friendshipImpact?: number) => void, scenario: { text: string; choices: { label: string; moneyImpact: number; friendshipImpact?: number }[] } }) {
  return (
    <div className="glass">
      <h2 className="text-2xl font-bold mb-4 text-yellow-300">📖 {scenario.text}</h2>
      <div className="space-y-3">
        {scenario.choices.map((choice) => (
          <button
            key={choice.label}
            className="btn w-full bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-100.0"
            onClick={() => onChoose(choice.moneyImpact, choice.label, choice.friendshipImpact ?? 0)}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}
