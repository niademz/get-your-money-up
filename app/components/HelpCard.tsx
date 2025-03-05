export default function HelpCard() {
    return (
      <div className="text-center rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 bangers">How to Play</h2>
        <p className="text-lg text-yellow-300 mb-4">
          Welcome to <strong>Get Your Money Up 101</strong>, a financial literacy game designed for college students!
        </p>
        <p className="text-lg text-yellow-300 mb-4">
          - Choose a character with a starting balance and friendship rating.<br />
          - Set your weekly allowance and duration for how long you want to play.<br />
          - Make weekly financial decisions that impact both your money and social life.<br />
          - Each choice you make affects your progress—can you stay financially stable while keeping your friends?
        </p>
        <p className="text-lg text-yellow-300">Play wisely and see how well you can manage your money!</p>
      </div>
    );
  }