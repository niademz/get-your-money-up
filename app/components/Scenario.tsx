"use client";

import { ScenarioChoice } from "@/app/game/scenarios";

export default function Scenario({ onChoose, scenario }: { 
  onChoose: (choice: ScenarioChoice, choiceLabel: string) => void; 
  scenario: { text: string; choices: ScenarioChoice[] } 
}) {
  return (
    <div className="glass">
      <h2 className="text-2xl font-bold mb-4 text-yellow-300">📖 {scenario.text}</h2>
      <div className="space-y-3">
        {scenario.choices.map((choice) => (
          <button
            key={choice.label}
            className="btn w-full bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-100.0"
            onClick={() => onChoose(choice, choice.label)} // 🆕 Pass full `choice` object
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}
