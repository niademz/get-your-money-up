"use client";
import { useState } from "react";
import { characters } from "@/app/game/characters";
import { FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HelpCard from "@/app/components/HelpCard";

export default function GameStart({ onStart }: { onStart: (data: { budget: number; weeks: number; character: typeof characters[number] }) => void }) {
  const [name, setName] = useState<string>("");
  const [budget, setBudget] = useState<number>(100);
  const [weeks, setWeeks] = useState<number>(4);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState<number>(0);
  const [showHelp, setShowHelp] = useState(false);

  const handleStart = () => {
    const selectedCharacter = characters[selectedCharacterIndex];
    if (selectedCharacter) {
      onStart({ budget, weeks, character: selectedCharacter });
    }
  };

  return (
    <div className="glass max-w-lg mx-auto text-center min-h-screen bg-gradient-to-r from-black to-yellow-900 relative">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 bangers">Get Your Money Up 101 💰</h2>

      <button 
        className="mb-4 text-yellow-300 underline hover:text-yellow-400"
        onClick={() => setShowHelp(true)}
      >
        How to Play?
      </button>

      <input 
        type="text" 
        placeholder="Enter your name" 
        className="input mb-4"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

      <h3 className="text-left text-lg font-semibold text-gray-300">Select Your Character:</h3>
      <div className="flex items-center justify-center my-4">
        <button 
          onClick={() => setSelectedCharacterIndex((prev) => (prev - 1 + characters.length) % characters.length)}
          className="btn text-black p-3 rounded-full"
        >
          <FaArrowLeft className="w-8 h-8 text-yellow-400 mb-2 hover:text-yellow-500" />
        </button>
        <div className="relative mx-6 p-6 bg-black/40 border border-yellow-500 rounded-lg shadow-lg text-yellow-300">
          <center>
            <FaUser className="w-14 h-14 text-yellow-400 mb-2" />
          </center>
          <h2 className="font-bold text-lg">{characters[selectedCharacterIndex].name}</h2>
          <h2 className="text-sm">Starting Balance: ${characters[selectedCharacterIndex].startingMoney}</h2>
          <h2 className="text-sm">Starting Friendship points: {characters[selectedCharacterIndex].startingFriendship}/100</h2>
          <p className="text-sm">{characters[selectedCharacterIndex].blurb}</p>
        </div>
        <button 
          onClick={() => setSelectedCharacterIndex((prev) => (prev + 1) % characters.length)}
          className="btn text-black p-3 rounded-full"
        >
          <FaArrowRight className="w-8 h-8 text-yellow-400 mb-2 hover:text-yellow-500" />
        </button>
      </div>

      <h3 className="text-left text-lg font-semibold text-gray-300">Enter Weekly Allowance:</h3>
      <input 
        type="number" 
        className="input mb-4"
        value={budget} 
        onChange={(e) => setBudget(Number(e.target.value))} 
      />

      <h3 className="text-left text-lg font-semibold text-gray-300">Enter Game Duration (Weeks):</h3>
      <input 
        type="number" 
        className="input mb-6"
        value={weeks} 
        onChange={(e) => setWeeks(Number(e.target.value))} 
      />

      <button 
        className="btn w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-800"
        onClick={handleStart}
      >
        Start Game 🚀
      </button>

      {showHelp && (
        <div 
          className="fixed inset-0 bg-opacity-70 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setShowHelp(false)}
        >
          <div 
            className="bg-black p-6 rounded-lg shadow-lg max-w-lg text-white relative border border-yellow-500"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-2xl"
              onClick={() => setShowHelp(false)}
            >
              ✖
            </button>
            <HelpCard />
          </div>
        </div>
      )}
    </div>
  );
}