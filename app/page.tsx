"use client";
import { useState } from "react";
import GameStart from "@/app/components/GameStart";
import Scenario from "@/app/components/Scenario";
import StatusBar from "@/app/components/StatusBar";
import GameOver from "@/app/components/GameOver";
import { GameEvent, events } from "@/app/game/events";
import { ScenarioType, scenarios } from "@/app/game/scenarios";

export default function Home() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [character, setCharacter] = useState<{ name: string; startingMoney: number; startingFriendship: number } | null>(null);
  const [money, setMoney] = useState<number>(0);
  const [weeksLeft, setWeeksLeft] = useState<number>(4);
  const [friendship, setFriendship] = useState<number>(50);
  const [history, setHistory] = useState<{ text: string; choice: string }[]>([]);
  const [budget, setBudget] = useState(0);
  const [currentScenarios, setCurrentScenarios] = useState<ScenarioType[]>([]);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [eventPrompt, setEventPrompt] = useState<string | null>(null);
  const [eventTriggered, setEventTriggered] = useState(false);
  const [pendingEventImpact, setPendingEventImpact] = useState<{ money: number; friendship: number } | null>(null);
  const [usedScenarios, setUsedScenarios] = useState<ScenarioType[]>([]);
  const [usedEvents, setUsedEvents] = useState<GameEvent[]>([]);
  const [showWeekSummary, setShowWeekSummary] = useState(false);
  
  // 🎯 Start the game
  const startGame = ({ budget, weeks, character }: { budget: number; weeks: number; character: { name: string; startingMoney: number; startingFriendship: number } }) => {
    setCharacter(character);
    setMoney(character.startingMoney);
    setFriendship(character.startingFriendship);
    setWeeksLeft(weeks);
    setBudget(budget);
    setGameStarted(true);
    setUsedScenarios([]); // Reset used scenarios
    setUsedEvents([]); // Reset used events
    setHistory([]);
    triggerWeeklyScenarios();
  };

  // 🎲 Generate 3 Random Scenarios for the Week
  const triggerWeeklyScenarios = () => {
    console.log(usedScenarios);
    const availableScenarios = scenarios.filter((scenario) => !usedScenarios.includes(scenario));
    const newScenarios = [];

    for (let i = 0; i < 3; i++) {
      if (availableScenarios.length === 0) break; // No more scenarios left
      const scenario = getRandomScenario(availableScenarios);
      newScenarios.push(scenario);
      setUsedScenarios((prev) => [...prev, scenario]); // Mark scenario as used
    }

    setCurrentScenarios(newScenarios);
    setScenarioIndex(0);
  };

  // 🔀 Get a Random Scenario from the available list
  const getRandomScenario = (availableScenarios: ScenarioType[]) => {
    const randomIndex = Math.floor(Math.random() * availableScenarios.length);
    return availableScenarios[randomIndex];
  };

  // 🎲 Get a Truly Random Event (30% Chance)
  const getRandomEvent = (triggerChance: number = 0.3): GameEvent | null => {
    if (Math.random() > triggerChance) return null; // 70% chance to skip

    const availableEvents = events.filter((event) => !usedEvents.includes(event));
    if (availableEvents.length === 0) return null; // No more events left

    const totalWeight = availableEvents.reduce((sum, event) => sum + event.probability, 0);
    let randomNum = Math.random() * totalWeight;

    for (const event of availableEvents) {
      if (randomNum < event.probability) {
        setUsedEvents((prev) => [...prev, event]); // Mark event as used
        return event;
      }
      randomNum -= event.probability;
    }

    return null; // Fallback
  };

  // ✅ Handle Player's Choice for a Scenario
  const handleChoice = (moneyImpact: number, choiceLabel: string, friendshipImpact = 0) => {
    // Update money & friendship immediately
    setMoney((prev) => prev + moneyImpact);
    setFriendship((prev) => Math.max(0, Math.min(100, prev + friendshipImpact)));
    setHistory((prev) => [...prev, { text: currentScenarios[scenarioIndex].text, choice: choiceLabel }]);

    // 🔥 Check if an event should be triggered
    const randomEvent = getRandomEvent();
    if (randomEvent) {
      setEventPrompt(randomEvent.text);
      setPendingEventImpact({ money: randomEvent.moneyImpact, friendship: randomEvent.friendshipImpact });
      setEventTriggered(true);
      return;
    }

    // ⏭️ Move to the next scenario or start a new week
    moveToNextScenarioOrWeek();
  };

  // ✅ Apply Event Impact and Continue
  const dismissEvent = () => {
    if (pendingEventImpact) {
      setMoney((prev) => prev + pendingEventImpact.money);
      setFriendship((prev) => Math.max(0, Math.min(100, prev + pendingEventImpact.friendship)));
    }
    setPendingEventImpact(null);
    setEventPrompt(null);
    setEventTriggered(false);
    moveToNextScenarioOrWeek();
  };

  // ✅ Move to the Next Scenario or Start a New Week
  const moveToNextScenarioOrWeek = () => {
    if (scenarioIndex < 2) {
      setScenarioIndex((prev) => prev + 1);
    } else {
      // 🕐 End of the week: Apply Weekly Allowance & Start Next Week
      setShowWeekSummary(true);
    }
  };

  const continueToNewWeek = () => {
    setShowWeekSummary(false); // Hide summary
    setMoney((prev) => prev + budget); // Apply weekly budget
    setWeeksLeft((prev) => prev - 1);
    triggerWeeklyScenarios();
  };

  const restartGame = () => {
    setGameStarted(false);
    setMoney(0);
    setWeeksLeft(4);
    setFriendship(50);
    setHistory([]);
    setCharacter(null);
    setBudget(0);
    setUsedScenarios([]); // Reset used scenarios
    setUsedEvents([]); // Reset used events
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {!gameStarted ? (
        <GameStart onStart={startGame}/>
      ) : weeksLeft > 0 ? (
        <>
          <StatusBar money={money} weeksLeft={weeksLeft} friendship={friendship} />
          <br></br>

          {showWeekSummary ? ( // ✅ Display the weekly summary
            <div className="glass text-center p-6 max-w-md mx-auto">
              <h2 className="text-3xl font-extrabold text-yellow-400">🏆 New Week!</h2>
              <p className="text-xl font-semibold text-yellow-300 mt-2">Weeks Left: {weeksLeft}</p>
              <p className="text-2xl font-bold text-green-400 mt-1">+${budget} Allowance Received</p>
              <button 
                className="btn mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-800"
                onClick={continueToNewWeek}
              >
                Continue ➡️
              </button>
            </div>
          ) : !eventTriggered ? (
            <Scenario onChoose={handleChoice} scenario={currentScenarios[scenarioIndex]} />
          ) : (
            <div className="p-6 bg-gray-800 rounded-lg text-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">🎲 Random Event!</h2>
              <p className="mb-4">{eventPrompt}</p>
              <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={dismissEvent}>
                Continue
              </button>
            </div>
          )}
        </>
      ) : (
        <GameOver money={money} friendship={friendship} history={history} onRestart={restartGame} />
      )}
    </div>
  );
}